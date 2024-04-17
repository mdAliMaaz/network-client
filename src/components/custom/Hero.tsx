import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CircleEllipsis, CircleUser, Copy, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useToast from "@/hooks/useToast";
import { AxiosError } from "axios";
import { axios } from "@/axios";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleCopy = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const profileUrl: any = new URL(e.view.document.location.href);
    navigator.clipboard
      .writeText(profileUrl)
      .then(() => toast("Copyed to clipboard"));
  };

  async function handleLogout() {
    try {
      const { data } = await axios.post("/users/logout", null, {
        withCredentials: true,
      });
      if (data.message) {
        toast(data.message);
        localStorage.removeItem("network-user");
        navigate("/auth");
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast(error.response?.data?.error);
      }
    }
  }

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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>profile</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex items-center justify-between ">
              <CircleUser />
              <Link to={"/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center justify-between "
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
              <DropdownMenuContent onClick={handleCopy}>
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
