import express from "express";
import ArtworkService from "../../services/artwork.service";
import UserService from "../../services/user.service";
import {
  UserSessionData,
  getSession,
} from "../../middlewares/session.middleware";

const Artwork = express.Router();
const artworkService = new ArtworkService();
const userService = new UserService();

Artwork.post("/", async (req, res, next) => {
  // const session: UserSessionData = await getSession(req);
  try {
    getSession(req, async (session) => {
      const artwork = await artworkService.create(req.body);
      const user = await userService.retrieve(session.userId);
      user.addArtworks(artwork);
      res.json({ response: "Artwork added" });
    });
  } catch (error) {
    next(error);
  }
});
Artwork.post("/:id", async (req, res, next) => {
  try {
    getSession(req, async (session) => {
      const artwork = await artworkService.update(req.params.id, req.body);
      res.json({ response: artwork });
    });
  } catch (error) {
    next(error);
  }
});

Artwork.get("/", async (req, res, next) => {
  try {
    // const session: UserSessionData = await getSession(req);
    getSession(req, async (session) => {
      const user = await userService.retrieve(session.userId);
      const artworks = await user.getArtworks();
      res.json({ response: artworks });
    });
  } catch (error) {
    next(error);
  }
});

Artwork.delete("/:id", async (req, res, next) => {
  try {
    getSession(req, async (session) => {
      artworkService.delete(req.params.id);
      res.json({ response: "Artwork deleted" });
    });
  } catch (error) {
    next(error);
  }
});
export default Artwork;
