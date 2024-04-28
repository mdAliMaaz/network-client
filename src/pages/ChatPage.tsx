import ChatSideBar from "@/components/custom/ChatSideBar";
import MessageContainer from "@/components/custom/MessageContainer";
import MobileMessageContainer from "@/components/custom/MobileMessageContainer";

const ChatPage = () => {
  return (
    <main className="p-2 m-auto md:max-w-6xl ">
      {/* Laptop screen */}
      <div className="hidden md:flex border rounded-md shadow-lg border-primary h-[95vh]">
        <ChatSideBar />
        <div className="border-[1px] border-primary mx-1"></div>
        <MessageContainer />
      </div>
      {/* mobile here */}
      <MobileMessageContainer />
    </main>
  );
};

export default ChatPage;
