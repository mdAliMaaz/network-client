import { useRecoilState, useRecoilValue } from "recoil";
import { conversationState } from "@/atoms/conversationAtom";
import Conversation from "./Conversation";
import { messageState } from "@/atoms/messageAtom";
import { useGetMessage } from "@/hooks/useGetMessages";
import Message from "./Message";
import { userState } from "@/atoms/userAtom";

const MessageContainer = () => {
  const [conversation, _] = useRecoilState(conversationState);
  const messages = useRecoilValue(messageState);
  useGetMessage();
const user = useRecoilValue(userState);
return (
  <div className="w-full h-full overflow-auto ">
    {!conversation ? (
      <div>Select a conversation</div>
    ) : (
      <>
        <Conversation
          name={conversation?.name}
          profilePic={conversation?.profilePic?.url}
        />
        {messages &&
          messages?.map((item) => (
            <Message
              senderProfile={user?.profilePic?.url}
              text={item.message}
              key={item._id}
              myMessage={user?._id === item?.senderId}
            />
          ))}
      </>
    )}
  </div>
);
};

export default MessageContainer;


