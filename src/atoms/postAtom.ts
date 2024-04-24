import { axios } from "@/axios";
import { selector } from "recoil";

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

export const postState = selector<IPost[] | []>({
  key: "productState",
  get: async () => {
    try {
      const response = await axios.get("/posts", { withCredentials: true });
      return response.data.data;
    } catch (err: any) {
      throw err;
    }
  },
});

