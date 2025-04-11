/** Resources */
import { ApiCategory } from "@types";

class MarvelService {
  private domain?: string;
  private apiKey?: string;
  private apiHash?: string;
  private apiTs?: string;

  constructor() {
    this.domain = process.env.PUBLIC_API_URL;
    this.apiKey = process.env.PUBLIC_API_KEY;
    this.apiHash = process.env.PUBLIC_API_HASH;
    this.apiTs = process.env.PUBLIC_API_TS;
  }

  /**
   * Fetches data from the API using the provided path and page number.
   * @param path - The API endpoint path to fetch data from.
   * @param page - The page number for pagination.
   * @returns A promise that resolves to the API response.
   * @throws An error if the request fails or if the response is not ok.
   */
  async getByPath(path: string, page?: string): Promise<ApiCategory> {
    try {
      let DOMAIN = `${this.domain}${path}?${this.apiTs}&${this.apiKey}&${this.apiHash}`;

      if (page) {
        DOMAIN += `&offset=${page}`;
      }

      const data = await fetch(DOMAIN);

      const res: ApiCategory = await data.json();

      return res;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";

      throw new Error(`Error in GET ${path}: ${errorMessage}`);
    }
  }

  /**
   * Fetches data from the API using the provided path and page number.
   * @param section - The section to which the id we are looking for belongs.
   * @param id - The id we are looking for.
   * @returns A promise that resolves to the API response.
   * @throws An error if the request fails or if the response is not ok.
   */
  async getById(section: string, id: string): Promise<ApiCategory> {
    try {
      const DOMAIN = `${this.domain}${section}/${id}?${this.apiTs}&${this.apiKey}&${this.apiHash}`;

      const data = await fetch(DOMAIN);

      const res: ApiCategory = await data.json();

      return res;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";

      throw new Error(`Error in GET ${section}/${id}: ${errorMessage}`);
    }
  }
}

export default MarvelService;