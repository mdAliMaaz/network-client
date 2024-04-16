import { atom } from "recoil";

export const authPageState = atom({
  key: "authPageState",
  default: "login",
});
