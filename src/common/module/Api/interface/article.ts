interface articleAll {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: [];
  createdAt: string;
  updatedAt: string;
  favorited: false;
  favoritesCount: number;
  author: {
    username: string;
    bio: null;
    image: "string";
    following: boolean;
  };
}

interface TagsProperty {
  tags?: string[];
}
interface artcileSection {
  tag?: string | undefined;
  author?: string;
  favorited?: string | null;
  limit?: number;
  offset?: number;
}
interface IGetArticleListAll {
  articles: articleAll[];
  articlesCount: number;
}

interface articleTag {
  data: string;
}

// interface articleFav{

// }

export type {
  articleAll,
  articleTag,
  IGetArticleListAll,
  artcileSection,
  TagsProperty,
};
