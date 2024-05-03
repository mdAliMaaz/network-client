import { axios } from "@/axios";
import { IPost } from "@/types";
import { AxiosError } from "axios";
import { atom, selector, selectorFamily } from "recoil";

export const refreshPostsTriggerState = atom({
  key: "refreshPostsTriggerState",
  default: 0, // Initial value doesn't matter much
});

export const postState = selector<IPost[] | []>({
  key: "productState",
  get: async ({ get }) => {
    try {
      get(refreshPostsTriggerState);
      const response = await axios.get("/posts", { withCredentials: true });
      return response.data.data;
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if(err.status === 403){
          localStorage.removeItem('network-user');
          window.location.replace('/auth')
        }
      }
    }
  },
});

export const postByUsername = selectorFamily({
  key: "postByUsername",
  get: (id) => async () => {
    try {
      const response = await axios.get(`/posts/user/${String(id)}`, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
});
