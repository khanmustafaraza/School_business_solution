// import sharp from "sharp";

import sharp from "sharp";

// export const optimizeImage = async (file: File) => {
//   const inputBuffer = Buffer.from(await file.arrayBuffer());

//   const image = sharp(inputBuffer);
//   const metadata = await image.metadata();

//   let pipeline = image.resize(600); // resize first

//   // 👉 Apply compression based on original format
//   switch (metadata.format) {
//     case "jpeg":
//     case "jpg":
//       pipeline = pipeline.jpeg({ quality: 70 });
//       break;

//     case "png":
//       pipeline = pipeline.png({ compressionLevel: 9 });
//       break;

//     case "webp":
//       pipeline = pipeline.webp({ quality: 70 });
//       break;

//     case "avif":
//       pipeline = pipeline.avif({ quality: 50 });
//       break;

//     default:
//       // fallback (important)
//       pipeline = pipeline.jpeg({ quality: 70 });
//   }

//   const outputBuffer = await pipeline.toBuffer();

//   return {
//     buffer: outputBuffer,
//     type: `image/${metadata.format || "jpeg"}`,
//   };
// };

// const inputBuffer = Buffer.from(await file.arrayBuffer());
const resizeImage = async (file: Buffer) => {
  const outputBuffer = await sharp(file)
    .resize(400, 400, { fit: "cover" }) // uniform size
    .jpeg({ quality: 60 }) // convert to JPG
    .toBuffer();

  return {
    buffer: outputBuffer,
    type: "image/jpeg", // ✅ fixed type
  };
};

export default resizeImage;
