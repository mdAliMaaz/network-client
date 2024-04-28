import { cn } from "@/lib/utils";

interface MessageProps {
  myMessage?: boolean;
}
const Message = ({ myMessage }: MessageProps) => {
  return (
    <div
      className={`p-1  rounded-sm  w-[28rem] my-2 flex  items-center   ${cn(
        myMessage && "ml-auto flex-row-reverse"
      )}`}
    >
      <div className="rounded-full size-10 p-[1px] border-primary border ">
        <img
          className="w-full rounded-full"
          src="https://avatars.githubusercontent.com/u/130007307?v=4"
          alt="user"
        />
      </div>

      <p
        className={`flex-1 text-sm p-2 rounded-sm mx-3 w-full ${cn(
          myMessage ? "bg-primary text-white" : "bg-secondary"
        )}`}
      >
        This is a message. This is a message. This is a message. This is a
        message. This is a message. This is a message. This is a message. This
        is a message.
      </p>
    </div>
  );
};

export default Message;