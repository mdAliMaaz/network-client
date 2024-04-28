import ChatSideBar from "@/components/custom/ChatSideBar";
import MessageContainer from "@/components/custom/MessageContainer";
import MobileChatSideBar from "@/components/custom/MobileChatSideBar";

const ChatPage = () => {
  return (
    <main className="max-w-6xl p-2 m-auto ">
      <MobileChatSideBar />
      <div className="flex border rounded-md shadow-lg border-primary h-[80vh]">
        <ChatSideBar />
        <div className="border-[1px] border-primary mx-1"></div>
        <MessageContainer />
      </div>
    </main>
  );
};

export default ChatPage;
