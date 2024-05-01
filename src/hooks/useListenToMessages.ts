import { messageState } from "@/atoms/messageAtom";
import { useSocketContext } from "@/context/SocketContext";
import { IMessage } from "@/types";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const useListenToMessages = () => {
  const { socket } = useSocketContext();
  const [messages, setMessages] = useRecoilState(messageState);

  useEffect(() => {
    socket?.on("newMessage", (newMessage: IMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      if (socket) {
        socket?.off("newMessage");
      }
    };
  }, [socket, setMessages, messages]);
};

export default useListenToMessages;
