import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CircleUser, LogOut, MessageCircleCode } from "lucide-react";
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
import { userState } from "@/atoms/userAtom";
import { useRecoilState } from "recoil";

const Hero = () => {
  const [user, setUser] = useRecoilState(userState);

  const navigate = useNavigate();
  const toast = useToast();

  async function handleLogout() {
    try {
      const { data } = await axios.post("/users/logout", null, {
        withCredentials: true,
      });
      if (data.message) {
        toast(data.message);
        localStorage.removeItem("network-user");
        setUser(null);
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
            {user?.name}
          </h4>
          <Badge className="text-gray-500 w-fit" variant={"outline"}>
            @{user?.username}
          </Badge>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="p-1 border rounded-full border-primary">
              <Avatar>
                <AvatarImage src={user?.profilePic?.url} />
                <AvatarFallback>profile</AvatarFallback>
              </Avatar>
            </div>
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
        {user?.bio && <p>{user.bio}</p>}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 text-gray-500">
            <span>3.9k following</span>
            <span>8m followers</span>
          </div>
          <div>
            <Link to={"/chat"}>
              <MessageCircleCode className="size-7 text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
