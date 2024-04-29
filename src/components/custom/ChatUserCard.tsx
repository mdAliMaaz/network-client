import { BadgeCheck } from "lucide-react";


interface ChatUserProps {
  userProfile: string;
  name: string;
  lastMessage?: string;
}

const ChatUserCard = ({ userProfile, name, lastMessage }: ChatUserProps) => {
  return (
    <div className="p-1 my-2 transition-colors rounded-md cursor-pointer hover:bg-secondary">
      <div className="flex items-center space-x-3 space ">
        <div className="p-[1px] border rounded-full size-16 border-primary">
          <img
            src={userProfile}
            alt={name}
            className="object-cover overflow-auto rounded-full"
          />
        </div>
        <div className="flex-1">
          <span className="flex items-center text-sm">
            {name}{" "}
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
