
import { BadgeCheck } from "lucide-react";

interface IConversation {
  name?: string;
  profilePic?: string;
 
}

const Conversation = ({ name, profilePic }: IConversation) => {
  return (
    <>
      <div className="flex items-center p-2 space-x-3 border-b border-primary">
        <div className="p-[1px] border rounded-full size-16 border-primary ">
          <img
            src={profilePic}
            alt={name}
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex-1">
          <h1 className="flex items-center text-sm">
            {name}{" "}
            <span className="mx-2">
              <BadgeCheck className="size-4 text-primary" />
            </span>
          </h1>
        </div>
      </div>
      <div className="p-2 ">{/* messages */}</div>
    </>
  );
};

export default Conversation;
