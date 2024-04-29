import { useRecoilState } from "recoil";
import { conversationState } from "@/atoms/conversationAtom";
import Conversation from "./Conversation";

const MessageContainer = () => {
  const [conversation, _] = useRecoilState(conversationState);

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
        </>
      )}
    </div>
  );
};

export default MessageContainer;

{
  /* <Message key={item} myMessage={item % 2 === 0 ? true : false} /> */
}
