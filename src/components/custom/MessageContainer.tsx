import { BadgeCheck } from "lucide-react";
import { useState } from "react";
import Message from "./Message";
import MessageLoading from "./MessageLoading";

const MessageContainer = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-full overflow-auto ">
      <div className="flex items-center p-2 space-x-3 border-b border-primary">
        <div className="p-[1px] border rounded-full size-16 border-primary">
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
      <div className="p-2 ">
        {loading ? (
          <MessageLoading />
        ) : (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Message key={item} myMessage={item % 2 === 0 ? true : false} />
          ))
        )}
      </div>
    </div>
  );
};

export default MessageContainer;
