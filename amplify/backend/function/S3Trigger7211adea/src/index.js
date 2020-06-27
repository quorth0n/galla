/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_IMAGES_BUCKETNAME
Amplify Params - DO NOT EDIT */ // eslint-disable-next-line
const AWS = require('aws-sdk');
const S3 = new AWS.S3({
  signatureVersion: 'v4',
  httpOptions: { timeout: 3000 },
});
const sharp = require('sharp');

const THUMBNAIL_HEIGHT = parseInt(process.env.THUMBNAIL_HEIGHT || 480);

function makeThumbnail(photo) {
  return sharp(photo)
    .resize({
      fit: sharp.fit.inside,
      height: THUMBNAIL_HEIGHT,
    })
    .toBuffer();
}

async function resize(photoBody, bucketName, key) {
  const originalPostDimensions = await sharp(photoBody).metadata();

  if (originalPostDimensions.height <= 480) {
    console.log('original post <= 480p, thumbnail already uploaded');
    return;
  }

  const thumbnail = await makeThumbnail(photoBody);

  await S3.putObject({
    Body: thumbnail,
    Bucket: bucketName,
    Key: key,
  }).promise();
}

async function processRecord(record) {
  const bucketName = record.s3.bucket.name;
  const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));

  if (!record.eventName.includes('ObjectCreated')) {
    console.log('not a new file');
    return;
  }
  if (!key.includes('posts/')) {
    console.log('not a post upload');
    return;
  }

  const keyPrefix = key.substring(0, key.indexOf('/posts/'));
  const postID = key.substring(key.lastIndexOf('/') + 1, key.indexOf('.'));
  const ext = key.substring(key.lastIndexOf('.') + 1);
  const thumbKey = `${keyPrefix}/thumbs/${postID}.${ext}`;

  console.log('thumb key: ', thumbKey);

  const originalPost = await S3.getObject({
    Bucket: bucketName,
    Key: key,
  }).promise();

  const metadata = originalPost.Metadata;
  console.log('metadata', JSON.stringify(metadata));
  console.log('resizing');
  await resize(originalPost.Body, bucketName, thumbKey);
  console.log('done!');
}

exports.handler = async (event, context, callback) => {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));

  try {
    await Promise.all(event.Records.map(processRecord));
    return event;
  } catch (err) {
    console.error(err);
    return event;
  }
};
