import { IncomingForm, Fields, Files } from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const getThumb = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new IncomingForm();
  form.maxFileSize = 1 * 1000 * 1000;
  form.parse(req, async (err: any, fields: Fields, files: Files) => {
    // validation
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    try {
      const data = await sharp(files.image);
      fs.unlinkSync(files.image.path);

      res.json({
        key,
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });
};

export default getThumb;
