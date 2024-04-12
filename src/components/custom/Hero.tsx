import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CircleEllipsis, Copy } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Hero = () => {
  return (
    <div className="p-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center gap-1">
          <h4 className="text-3xl font-medium capitalize trackmeing-tight scroll-m-20">
            Mohammed ali maaz
          </h4>
          <Badge className="text-gray-500 w-fit" variant={"outline"}>
            maaz@2907
          </Badge>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>profile</AvatarFallback>
        </Avatar>
      </div>
      <div className="my-10">
        <p>CEO at Vercel</p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 text-gray-500">
            <span>3.9k following</span>
            <span>8m followers</span>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CircleEllipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex items-center justify-between ">
                  Copy <Copy className="w-3 h-3" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
