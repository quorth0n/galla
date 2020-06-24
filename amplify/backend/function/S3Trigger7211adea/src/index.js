/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_IMAGES_BUCKETNAME
Amplify Params - DO NOT EDIT */ // eslint-disable-next-line
const AWS = require('aws-sdk');
const S3 = new AWS.S3({ signatureVersion: 'v4' });
const sharp = require('sharp');

// We'll expect these environment variables to be defined when the Lambda function is deployed
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

  if (record.eventName !== 'ObjectCreated:Put') {
    console.log('Not a new file');
    return;
  }
  if (!key.includes('posts/')) {
    console.log('Not a post upload');
    return;
  }

  const keyPrefix = key.substr(0, key.indexOf('/posts/'));
  const postID = key.substr(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
  const thumbKey = `${keyPrefix}/thumbs/${postID}`;

  console.log('got info', postID);

  try {
    console.log('trying');
    await S3.headObject({
      Bucket: bucketName,
      Key: thumbKey,
    }).promise();
    console.log('Thumb already exists');
  } catch (e) {
    if (e.code === 'NotFound') {
      const originalPost = await S3.getObject({
        Bucket: bucketName,
        Key: key,
      }).promise();

      const metadata = originalPost.Metadata;
      console.log('metadata', JSON.stringify(metadata));
      console.log('resize');
      const sizes = await resize(originalPost.Body, bucketName, thumbKey);
      console.log('sizes', JSON.stringify(sizes));
    } else {
      console.error(e);
    }
  }
}

exports.handler = async (event, context, callback) => {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));

  try {
    event.Records.forEach(processRecord);
    return event;
  } catch (err) {
    console.error(err);
    return event;
  }
};
