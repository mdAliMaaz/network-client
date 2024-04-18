import { axios } from "@/axios";
import { atom, selector } from "recoil";

export const userState = atom({
  key: "user",
  default: JSON.parse(localStorage.getItem("network-user") as string),
});

export const userProfileState = selector({
  key: "userProfileState",
  get: async () => {
    const response = await axios.get("/users/profile", {
      withCredentials: true,
    });

    if (response.data.error) {
      throw new Error(response.data.error);
    }
    return response.data;
  },
});
