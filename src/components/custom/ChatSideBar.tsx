import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ChatUserCard from "./ChatUserCard";
import UserSearch from "./UserSearch";
import { Home } from "lucide-react";

const ChatSideBar = () => {
  return (
    <div className="w-[600px] p-1 h-full overflow-auto">
      <Button size={"sm"}>
        <Link to={"/"}>
          <Home />
        </Link>
      </Button>
      <h1 className="my-1 text-2xl font-bold text-center">
        Your Conversations
      </h1>
      <UserSearch />
      <ChatUserCard />
      <ChatUserCard />
      <ChatUserCard />
    </div>
  );
};

export default ChatSideBar;
