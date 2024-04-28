import ChatSideBar from "@/components/custom/ChatSideBar";
import MessageContainer from "@/components/custom/MessageContainer";
import MobileChatSideBar from "@/components/custom/MobileChatSideBar";
import { Skeleton } from "@/components/ui/skeleton";

const ChatPage = () => {
  return (
    <main className="max-w-6xl p-2 m-auto ">
      <div className="hidden md:flex border rounded-md shadow-lg border-primary h-[80vh]">
        <ChatSideBar />
        <div className="border-[1px] border-primary mx-1"></div>
        <MessageContainer />
      </div>

      <div className=" md:hidden">
      <MobileChatSideBar />
      <div className=" md:hidden">
        <div className="flex flex-col gap-10">
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
        </div>
      </div>
      </div>

      
    </main>
  );
};

export default ChatPage;
