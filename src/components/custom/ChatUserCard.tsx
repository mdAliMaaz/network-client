import { conversationState } from "@/atoms/conversationAtom";
import { useRecoilState } from "recoil";
import { IUser } from "@/types";
import { useSocketContext } from "@/context/SocketContext";

const ChatUserCard = (props: Partial<IUser>) => {
  const [_, setConversation] = useRecoilState(conversationState);

  const { onlineUsers } = useSocketContext();
  let isOnline;
  if (props._id) {
    isOnline = onlineUsers.includes(props._id);
  }

  function changeConversation() {
    if (props) {
      setConversation(props);
    }
  }

  return (
    <div
      onClick={changeConversation}
      className="p-1 my-2 transition-colors rounded-md cursor-pointer hover:bg-secondary"
    >
      <div className="flex items-center space-x-3 space ">
        <div className="p-[1px] border rounded-full size-16 border-primary relative">
          <img
            src={props?.profilePic?.url}
            alt={props?.name}
            className="object-cover overflow-auto rounded-full"
          />
        </div>
        <div className="flex-1">
          <span className="flex items-center text-sm">
            {props.name}{" "}
            {isOnline && (
              <span className="flex items-center mx-2 space-x-1">
                <span className="relative flex w-3 h-3">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400"></span>
                  <span className="relative inline-flex w-3 h-3 rounded-full bg-sky-500"></span>
                </span>
              </span>
            )}
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
