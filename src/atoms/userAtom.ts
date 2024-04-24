import { IUser } from "@/types";
import { atom } from "recoil";

export const userState = atom<IUser | null>({
  key: "userState",
  // @ts-ignore
  default: JSON.parse(localStorage.getItem("network-user")),
});
