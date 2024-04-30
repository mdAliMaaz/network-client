import { conversationState } from "@/atoms/conversationAtom";
import { messageState } from "@/atoms/messageAtom";
import { axios } from "@/axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export async function useGetMessage() {
  const conversation = useRecoilValue(conversationState);
  const [, setLoading] = useState(false);
  const [, setMessages] = useRecoilState(messageState);

  useEffect(() => {
    if (conversation !== null) {
      try {
        setLoading(true);
        if (conversation) {
          (async function getMessages() {
            const response = await axios.get(`/message/${conversation?._id}`, {
              withCredentials: true,
            });
            setMessages(response.data);
          })();
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [conversation]);
}
