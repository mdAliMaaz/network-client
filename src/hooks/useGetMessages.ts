import { messageState } from "@/atoms/messageAtom";
import { axios } from "@/axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export async function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [messages, setMessages] = useRecoilState(messageState);

  useEffect(() => {
    try {
      setLoading(true);
      if (userId !== "") {
        (async function getMessages() {
          const response = await axios.get(`/message/${userId}`, {
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
  }, [userId]);

  return { messages, setMessages, setUserId, loading };
}
