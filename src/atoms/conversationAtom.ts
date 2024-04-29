import { IUser } from "@/types";
import { atom } from "recoil";

export const conversationState = atom<Partial<IUser> | null>({
  key: "getConversation",
  default: null,
});
