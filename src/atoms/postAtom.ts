import { axios } from "@/axios";
import { IPost } from "@/types";
import { selector } from "recoil";


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

