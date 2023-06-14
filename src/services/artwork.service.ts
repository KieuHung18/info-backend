import ArtworkNotFoundError from "../errors/ArtworkNotFoundError";
import { Artwork, ArtworkProps } from "../models/artwork.model";

class ArtworkService {
  public async create(artwork): Promise<ArtworkProps[]> {
    return (await Artwork.bulkCreate(artwork)) as ArtworkProps[];
  }

  public async retrieve(id: string): Promise<ArtworkProps> {
    const artwork = await Artwork.findByPk(id);
    if (artwork) {
      return artwork as ArtworkProps;
    } else {
      throw new ArtworkNotFoundError();
    }
  }
  public async update(id: string, data): Promise<ArtworkProps> {
    const artwork = await this.retrieve(id);
    Object.assign(artwork, data);
    return (await artwork.save()) as ArtworkProps;
  }
  public async delete(id: string): Promise<ArtworkProps> {
    const artwork = await this.retrieve(id);
    await artwork.destroy();
    return artwork;
  }
  public async list(): Promise<ArtworkProps[]> {
    return (await Artwork.findAll({
      order: [["createdAt", "DESC"]],
    })) as ArtworkProps[];
  }
  public async listPublish(): Promise<ArtworkProps[]> {
    return (await Artwork.findAll({
      where: { publish: true },
      order: [["createdAt", "DESC"]],
    })) as ArtworkProps[];
  }
}
export default ArtworkService;
