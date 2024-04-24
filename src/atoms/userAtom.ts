import { atom } from "recoil";

interface IUser {
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

export const userState = atom<IUser | null>({
  key: "userState",
  // @ts-ignore
  default: JSON.parse(localStorage.getItem("network-user")),
});
