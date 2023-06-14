import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import CloudinaryService from "../../services/cloudinary.service";

const upload = multer({ dest: "uploads/" });
const Uploads = express.Router();
const cloudinaryService = new CloudinaryService();
Uploads.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
Uploads.post("/", upload.array("files", 10), async (req, res, next) => {
  try {
    const uploadedFiles = await cloudinaryService.uploads(req.files);
    res.json({ response: uploadedFiles });
  } catch (error) {
    next(error);
  }
});
Uploads.delete("/:id", async (req, res, next) => {
  try {
    await cloudinaryService.delete(req.params.id);
    res.json({ response: "File deleted" });
  } catch (error) {
    next(error);
  }
});
export default Uploads;
