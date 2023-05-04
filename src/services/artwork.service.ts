import NotFoundError from "../errors/not-found.error";
import { Artwork, ArtworkProps } from "../models/artwork.model";

class ArtworkService {
  public async create(artwork): Promise<ArtworkProps[]> {
    return (await Artwork.bulkCreate(artwork)) as ArtworkProps[];
  }

  public async retrive(id: string): Promise<ArtworkProps> {
    const artwork = await Artwork.findByPk(id);
    if (artwork) {
      return artwork as ArtworkProps;
    } else {
      throw new NotFoundError("ArtworkQueryError", "Artwork not found");
    }
  }
  public async update(id: string, data): Promise<ArtworkProps> {
    const artwork = await this.retrive(id);
    Object.assign(artwork, data);
    return (await artwork.save()) as ArtworkProps;
  }
  public async delete(id: string): Promise<ArtworkProps> {
    const artwork = await this.retrive(id);
    await artwork.destroy();
    return artwork;
  }
  public async list(): Promise<ArtworkProps[]> {
    return (await Artwork.findAll()) as ArtworkProps[];
  }
}
export default ArtworkService;