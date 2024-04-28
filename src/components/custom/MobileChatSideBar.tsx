import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Home, Menu } from "lucide-react";
import { Button } from "../ui/button";
import ChatUserCard from "./ChatUserCard";
import UserSearch from "./UserSearch";
import { Link } from "react-router-dom";

const MobileChatSideBar = () => {
  return (
    <div className="block my-3 md:hidden">
      <Sheet>
        <Button size={"icon"}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
        </Button>
        <SheetContent side={"left"} className="w-full">
          <SheetHeader>
            <SheetTitle>
              <Button size={"sm"} className="my-2 ">
                <Link to={"/"}>
                  <Home />
                </Link>
              </Button>
              <UserSearch />
            </SheetTitle>
            <SheetDescription>
              {[1, 2, 3].map((item) => (
                <ChatUserCard key={item} />
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileChatSideBar;
