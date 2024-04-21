import { axios } from "@/axios";
import { atom } from "recoil";

interface IPost {
  _id: string;
  postedBy: string;
  text: string;
  image: { public_id: string; url: string };
  likes: string[];
  replies: string[];
  createdAt: string;
  updatedAt: string;
}

export const postState = atom<IPost | null>({
  key: "postState",
  default: null,
  effects: [
    ({ onSet, setSelf }) => {
      onSet(() => {
        axios
          .get("/posts", { withCredentials: true })
          .then((response: any) => {
            setSelf(response.data);
          })
          .catch((error: any) => {
            console.error("Error fetching new user data:", error);
          });
      });
    },
  ],
});
