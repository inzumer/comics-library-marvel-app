/** Components */
export type ButtonVariant = 'bold' | 'light' | 'transparent';

/** API Data */
export type ApiResults = Array<{
  id: number;
  name: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: Array<{ name: string }>;
  };
  comics: {
    items: Array<{ name: string }>;
  };
  stories: {
    items: Array<{ name: string }>;
  };
}>;

export type ApiResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<{
      id: number;
      name: string;
      title: string;
      description: string;
      thumbnail: {
        path: string;
        extension: string;
      };
      series: {
        items: Array<{ name: string }>;
      };
      comics: {
        items: Array<{ name: string }>;
      };
      stories: {
        items: Array<{ name: string }>;
      };
    }>;
  };
};

export type ApiCategory = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<{
    id: number;
    name: string;
    title: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    characters: {
      items: Array<{ name: string }>;
    };
    series: {
      items: Array<{ name: string }>;
    };
    comics: {
      items: Array<{ name: string }>;
    };
    stories: {
      items: Array<{ name: string }>;
    };
  }>;
};

export type ApiCategoryInfo = {
  name: string;
}
