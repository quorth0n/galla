import { IncomingForm, Fields, Files } from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadThumb = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new IncomingForm();
  form.keepExtensions = true;
  form.maxFileSize = 1 * 1000 * 1000;
  form.parse(req, async (err: any, fields: Fields, files: Files) => {
    // validation
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (!files.thumb) {
      // TODO: auto resize with sharp
      res.status(400).json({ error: 'No 360p image' });
      return;
    }

    try {
      // upload to static dir
      const ext = files.thumb.name.split('.')[1];
      const key = `${fields.id}.${ext}`;
      fs.copyFileSync(
        files.thumb.path,
        `./public/thumbs/${key}`,
        fs.constants.COPYFILE_EXCL
      );
      fs.unlinkSync(files.thumb.path);

      res.json({
        key,
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });
};

export default uploadThumb;
