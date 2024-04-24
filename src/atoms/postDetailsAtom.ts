import { axios } from "@/axios";
import { selector, selectorFamily } from "recoil";

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

export const postDetails = selectorFamily({
  key: "postDetails",
  get: (id) => async () => {
    try {
      const response = await axios.get(`/posts/${String(id)}`, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  },
});
