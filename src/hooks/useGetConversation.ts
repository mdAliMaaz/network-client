
import { axios } from "@/axios";
import { IUser } from "@/types";
import { useEffect, useState } from "react";

export function useGetConversation() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<IUser[]>();

  useEffect(() => {
    try {
      setLoading(true);
      (async function getConversation() {
        const response = await axios.get("/users", { withCredentials: true });
        setConversations(response.data);
      })();
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, conversations };
}
