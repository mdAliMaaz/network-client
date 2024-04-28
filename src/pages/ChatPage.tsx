import ChatSideBar from "@/components/custom/ChatSideBar";
import Message from "@/components/custom/Message";
import MessageContainer from "@/components/custom/MessageContainer";
import MobileChatSideBar from "@/components/custom/MobileChatSideBar";
import { Skeleton } from "@/components/ui/skeleton";
import { BadgeCheck } from "lucide-react";

const ChatPage = () => {
  return (
    <main className="p-2 m-auto md:max-w-6xl ">
      <div className="hidden md:flex border rounded-md shadow-lg border-primary h-[80vh]">
        <ChatSideBar />
        <div className="border-[1px] border-primary mx-1"></div>
        <MessageContainer />
      </div>
      {/* mobile here */}
      <div className="w-full md:hidden">
        <MobileChatSideBar />
        <div className=" md:hidden">
          <div className="flex items-center w-full p-2 space-x-3 border-b border-primary">
            <div className="p-[1px] border rounded-full size-14 border-primary">
              <img
                src="https://avatars.githubusercontent.com/u/130007307?v=4"
                alt="user"
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <h1 className="flex items-center text-sm">
                Mohammed Ali Maaz{" "}
                <span className="mx-2">
                  <BadgeCheck className="size-4 text-primary" />
                </span>
              </h1>
            </div>
          </div>
          {/* <div className="flex flex-col gap-10">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>

            <div className="flex items-center ml-auto space-x-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <Skeleton className="w-12 h-12 rounded-full" />
            </div>

            <div className="flex items-center space-x-4">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>

            <div className="flex items-center ml-auto space-x-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <Skeleton className="w-12 h-12 rounded-full" />
            </div>

            <div className="flex items-center space-x-4">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div> */}
          <Message />
          <Message myMessage={true} />
          <Message />
          <Message myMessage={true} />
        </div>
      </div>
    </main>
  );
};

export default ChatPage;
