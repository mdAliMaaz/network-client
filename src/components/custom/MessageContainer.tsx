import { BadgeCheck } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const MessageContainer = () => {
  const [loading, setLoading] = useState(true);
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
        {loading && (
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
        )}
      </div>
    </div>
  );
};

export default MessageContainer;
