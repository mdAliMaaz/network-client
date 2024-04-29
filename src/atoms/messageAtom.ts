import { IMessage } from "@/types";
import { atom } from "recoil";

export const messageState = atom<IMessage[]>({
  key: "getMessages",
  default: [],
});
