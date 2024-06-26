import { SendHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { conversationState } from "@/atoms/conversationAtom";
import { useRecoilState } from "recoil";
import Loading from "./Loading";
import { axios } from "@/axios";
import { messageState } from "@/atoms/messageAtom";

const CreateMessage = () => {
  const [conversation, _] = useRecoilState(conversationState);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useRecoilState(messageState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (conversation) {
      try {
        setInput("");
        setLoading(true);
        const response = await axios.post(
          `/message/send/${conversation?._id}`,
          { message: input },
          { withCredentials: true }
        );
        setMessages((prev) => [...prev, response.data]);
      } catch (error) {
        setInput("");
        setLoading(false);
        console.log("Error while  sending message", error);
      } finally {
        setInput("");
        setLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky flex items-center w-full p-2 space-x-1"
    >
      <Input
        placeholder="Message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        type="submit"
        size={"icon"}
        variant={"outline"}
        className="border-primary"
        disabled={input === ""}
      >
        {loading ? <Loading /> : <SendHorizontal className="text-primary" />}
      </Button>
    </form>
  );
};

export default CreateMessage;
