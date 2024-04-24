export interface IPost {
  _id: string;
  postedBy: string;
  text: string;
  image: { public_id: string; url: string };
  likes: string[];
  replies: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  profilePic: { url: string; public_id: string };
  followers: string;
  following: string;
  bio: string;
  isFrozen: boolean;
}
