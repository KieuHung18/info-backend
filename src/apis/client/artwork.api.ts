import express from "express";
import ArtworkService from "../../services/artwork.service";
const Artwork = express.Router();

Artwork.get("/", async (req, res, next) => {
  const artworkService = new ArtworkService();
  try {
    const artworks = await artworkService.listPublish();
    res.json({ response: artworks });
  } catch (error) {
    next(error);
  }
});
export default Artwork;
