import { axios } from "@/axios";
import { selector } from "recoil";

export const productState = selector({
  key: "productState",
  get: async () => {
    const response = await axios.get("/posts", { withCredentials: true });
    return response.data.data;
  },
});
