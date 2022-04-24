import { NewsRoot } from '../types';

const getUrl = (query: string, hitsPerPage: number = 10, page: number = 0) => {
  return `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=${hitsPerPage}&page=${page}`;
};

export class Api {
  static async getLatestNews(searchQuery: string): Promise<NewsRoot> {
    const request = await fetch(getUrl(searchQuery));
    return await request.json();
  }

  static async getPopularNews(): Promise<NewsRoot> {
    const request = await fetch(getUrl(''));
    return await request.json();
  }
}
