// importing cloudinary instance
const cloudinary = require("cloudinary").v2;

// !================upload image to cloudinary==================

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder };
  if (height) {
    options.height = height;
  }
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  console.log("OPTIONS", options);
  return await cloudinary.uploader.upload(file.tempFilePath, options);
};
