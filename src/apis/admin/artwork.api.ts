import express from "express";
import ArtworkService from "../../services/artwork.service";
import UserService from "../../services/user.service";
import { SessionData, getSession } from "../../middlewares/session.middleware";

const Artwork = express.Router();
const artworkService = new ArtworkService();
const userService = new UserService();
Artwork.post("/", async (req, res, next) => {
  const session: SessionData = await getSession(req);
  try {
    const user = await userService.retrieve(session.userId);
    user.createArtwork(req.body);
    res.json({ response: "Artwork added" });
  } catch (error) {
    next(error);
  }
});
Artwork.post("/:id", async (req, res, next) => {
  try {
    const artwork = await artworkService.update(req.params.id, req.body);
    res.json({ response: artwork });
  } catch (error) {
    next(error);
  }
});

Artwork.get("/", async (req, res, next) => {
  try {
    const session: SessionData = await getSession(req);
    const user = await userService.retrieve(session.userId);
    const artworks = await user.getArtworks();
    res.json({ response: artworks });
  } catch (error) {
    next(error);
  }
});

Artwork.delete("/:id", async (req, res, next) => {
  try {
    artworkService.delete(req.params.id);
    res.json({ response: "Artwork deleted" });
  } catch (error) {
    next(error);
  }
});
export default Artwork;
