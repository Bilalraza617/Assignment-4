export type bloog = {
  id: number;
  title: string;
  author: { name: string; bio: string; email: string; image?: string }; // Image is now optional
  date_published: string;
  tags: string[];
  categories: string[];
  comments: { user: string; comment: string; date: string }[];
  image: string;
};
