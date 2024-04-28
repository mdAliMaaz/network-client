import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Input } from "../ui/input";

const MobileChatSideBar = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>
              <Input className="p-1 " placeholder="Search a user" />
            </SheetTitle>
            <SheetDescription>
              {[1, 2, 3].map((item) => (
                <div>Batman</div>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileChatSideBar;
