export interface IReply {
  _id:string
  userId: string;
  text: string;
  userProfilePic: string;
  username: string;
  likes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IPost {
  _id: string;
  postedBy: string;
  text: string;
  image: { public_id: string; url: string };
  likes: string[];
  replies: IReply[];
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

export interface IMessage {
  senderId: string;
  receiverId: string;
  _id: string;
  message: string;
  shouldShake?: boolean;
}