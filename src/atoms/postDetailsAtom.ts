import { axios } from "@/axios";
import {  selectorFamily } from "recoil";



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
