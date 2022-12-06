interface getCommonets {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: true;
  };
}
interface ICommentsProps {
  comments: getCommonets[];
}
interface PostComment {
  comment: {
    body: string;
  };
}
export type { ICommentsProps, PostComment };
