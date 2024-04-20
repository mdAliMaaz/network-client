import { axios } from "@/axios";
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
  default: null,
  effects: [
    ({ onSet, setSelf }) => {
      onSet(() => {
        axios
          .get("/users/profile", { withCredentials: true })
          .then((response) => {
            setSelf(response.data);
          })
          .catch((error) => {
            console.error("Error fetching new user data:", error);
          });
      });
    },
  ],
});




