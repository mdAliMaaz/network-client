import { BadgeCheck } from "lucide-react";
import { conversationState } from "@/atoms/conversationAtom";
import { useRecoilState } from "recoil";
import { IUser } from "@/types";

const ChatUserCard = (props: Partial<IUser>) => {
  const [_, setConversation] = useRecoilState(conversationState);

  function changeConversation() {
    if(props){
      setConversation(props);
    }
  }
  return (
    <div
      onClick={changeConversation}
      className="p-1 my-2 transition-colors rounded-md cursor-pointer hover:bg-secondary"
    >
      <div className="flex items-center space-x-3 space ">
        <div className="p-[1px] border rounded-full size-16 border-primary">
          <img
            src={props?.profilePic?.url}
            alt={props?.name}
            className="object-cover overflow-auto rounded-full"
          />
        </div>
        <div className="flex-1">
          <span className="flex items-center text-sm">
            {props.name}{" "}
            <span className="mx-2">
              <BadgeCheck className="size-4 text-primary" />
            </span>
          </span>
          <div className="text-sm text-gray-400/50">
            Lorem, ipsum dolor sit amet consectetur
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUserCard;
