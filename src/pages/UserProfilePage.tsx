import { userByusername } from "@/atoms/userAtom";
import Layout from "@/components/custom/Layout";
import { IPost, IUser } from "@/types";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Button } from "@/components/ui/button";
import { BadgeCheck, CircleEllipsis, Copy } from "lucide-react";
import { postByUsername } from "@/atoms/postAtom";
import FeedCard from "@/components/custom/FeedCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import useToast from "@/hooks/useToast";

const UserProfilePage = () => {
  const { username } = useParams();
  const toast = useToast();
  const user: IUser = useRecoilValue(userByusername(username));
  const posts: IPost[] = useRecoilValue(postByUsername(user?._id));

  const handleCopy = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const profileUrl: any = new URL(e.view.document.location.href);
    navigator.clipboard
      .writeText(profileUrl)
      .then(() => toast("Copyed to clipboard"));
  };

  return (
    <Layout>
      <div className="flex flex-col py-10 space-y-10">
        <div className="flex items-center justify-between p-1 ">
          <div className="p-1 border rounded-full border-primary w-fit">
            <img
              src={user?.profilePic?.url}
              alt={user?.username}
              className="w-20 rounded-full md:w-28"
            />
          </div>
          <Button variant={"default"} size={"sm"}>
            follow
          </Button>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="flex items-center space-x-2 text-3xl">
                {user?.name}{" "}
                <span className="mx-4 ">
                  <BadgeCheck className=" text-primary" />
                </span>
              </h1>
              <Badge className="text-gray-500 w-fit" variant={"outline"}>
                @{user?.username}
              </Badge>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CircleEllipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent onClick={handleCopy}>
                <DropdownMenuItem className="flex items-center justify-between">
                  Copy <Copy className="w-3 h-3" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className="text-gray-400/90">
            Globally Respected Humanitarian + Celebrated Leadership Expert +
            Advisor to Business Titans. #1 Bestselling Author of The 5AM Club +
            The Everyday Hero Manifesto
          </p>
        </div>
        <div className="flex items-center space-x-5 text-gray-500 w-fit">
          <Badge className="text-gray-500 w-fit" variant={"outline"}>
            <span>
              {" "}
              <span className="font-bold ">{user?.following.length}</span>{" "}
              Following
            </span>
          </Badge>
          <Badge className="text-gray-500 w-fit" variant={"outline"}>
            <span>
              {" "}
              <span className="font-bold ">{user?.followers.length}</span>{" "}
              Followers
            </span>
          </Badge>
        </div>
      </div>
      <div>
        {user && posts ? (
          posts?.map((post) => (
            <FeedCard
              key={post?._id}
              description={post?.text}
              imageUrl={post?.image?.url}
              postId={post?._id}
              postedBy={post?.postedBy}
              createdAt={post?.createdAt}
              totalReplys={post?.replies?.length}
              totalLikes={post?.likes?.length}
              likes={post?.likes}
              replies={post?.replies}
            />
          ))
        ) : (
          <p>User does'nt have any post yet.</p>
        )}
      </div>
    </Layout>
  );
};

export default UserProfilePage;
