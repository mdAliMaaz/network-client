import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: JSON.parse(localStorage.getItem("network-user") as string),
});
