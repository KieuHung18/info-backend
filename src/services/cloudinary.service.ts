import fs from "fs";
import cloudinary = require("cloudinary");
import dotenv from "dotenv";
import TimeoutError from "../errors/base-error/timeout.error";

dotenv.config();

const cloudinaryV2 = cloudinary.v2;
cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
interface CloudFile {
  publicId: string;
  name: string;
  width: number;
  height: number;
  resource_type: string;
  url: string;
}
class CloudinaryService {
  public async uploads(files) {
    const uploadedFiles: CloudFile[] = [];
    for (const file of files) {
      try {
        await cloudinaryV2.uploader.upload(file.path, {}).then((data) => {
          const uploadedFile: CloudFile = {
            publicId: data.public_id,
            name: file.originalname,
            width: data.width,
            height: data.height,
            resource_type: data.resource_type,
            url: data.url,
          };
          uploadedFiles.push(uploadedFile);
        });
      } catch (error) {
        throw new TimeoutError(
          "CloudinaryConnectionError",
          "Cant connect to cloudinary"
        );
      } finally {
        fs.rm(file.path, (err) => {
          if (err) {
            console.error("Delete file fail", err);
          }
        });
      }
    }
    return uploadedFiles;
  }
  public async delete(publicId: string) {
    await cloudinaryV2.uploader.destroy(publicId, function (result) {
      return result;
    });
  }
}
export default CloudinaryService;
