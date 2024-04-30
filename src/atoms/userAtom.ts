import { axios } from "@/axios";
import { IUser } from "@/types";
import { atom, selector, selectorFamily } from "recoil";

export const userState = atom<IUser | null>({
  key: "userState",
  // @ts-ignore
  default: JSON.parse(localStorage.getItem("network-user")),
});

export const userById = selectorFamily({
  key: "userById",
  get: (userId) => async () => {
    try {
      const response = await axios.get(`/users/postedBy/${String(userId)}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (err: any) {
      throw err;
    }
  },
});

export const userByusername = selectorFamily({
  key: "userByUsername",
  get: (username) => async () => {
    try {
      const response = await axios.get(`/users/${String(username)}`, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (err: any) {
      throw err;
    }
  },
});




export const getCurrentUser = selector({
  key: "getCurrentUser",
  get: async () => {
    try {
      const response = await axios.get(`/users/profile`, {
        withCredentials: true,
      });
      return response.data;
    } catch (err: any) {
      throw err;
    }
  },
});