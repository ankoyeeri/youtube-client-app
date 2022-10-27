export interface SearchItem {
  name: string;
  views: number;
  likes: number;
  dislikes: number;
  comments: number;
  image: string;
  link?: string;
  description?: string;
  date: Date;
}
