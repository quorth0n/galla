import { IncomingForm, Fields, Files } from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import { Storage, Auth } from 'aws-amplify';
import fs from 'fs';
import { nanoid } from 'nanoid';

import { configure } from '../../helpers/withAmplify';

export const config = {
  api: {
    bodyParser: false,
  },
};

const newPost = async (req: NextApiRequest, res: NextApiResponse) => {
  configure();
  const user = await Auth.currentAuthenticatedUser();
  const form = new IncomingForm();
  form.keepExtensions = true;
  form.maxFileSize = 10 * 1000 * 1000;

  form.parse(req, (err: any, fields: Fields, files: Files) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    // upload 360 to vercel static dir
    const extension = files.img360.name.split('.')[1];
    const id = nanoid();
    const key = `${id}.${extension}`;
    fs.copyFile(files.img360.path, `./public/${key}`, (renameErr) => {
      if (renameErr) {
        console.log(renameErr);
        return;
      }

      //const url = `https://${bucket}.s3.${region}.amazonaws.com/public/thumbs/${key}`;
      res.json({ good: 'yes' });
    });

    console.log(files);
    console.log(fields);
    // res.end(JSON.stringify({ fields, files }, null, 2));
  });
};

export default newPost;
