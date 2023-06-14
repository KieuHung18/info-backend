import NotFoundError from "./base-error/not-found.error";
class ArtworkNotFoundError extends NotFoundError {
  constructor() {
    const name = "ArtworkNotFoundError";
    const message = "Artwork not found";
    super(name, message);
  }
}
export default ArtworkNotFoundError;
