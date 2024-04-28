import { getCurrentUser, userByusername } from "@/atoms/userAtom";
import Layout from "@/components/custom/Layout";
import { IPost, IUser } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  CircleEllipsis,
  Copy,
  SquareArrowLeft,
} from "lucide-react";
import { postByUsername } from "@/atoms/postAtom";
import FeedCard from "@/components/custom/FeedCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import useToast from "@/hooks/useToast";
import { useState } from "react";
import { axios } from "@/axios";

const UserProfilePage = () => {
  const { username } = useParams();
  const toast = useToast();
  const userByUsername: IUser = useRecoilValue(userByusername(username));
  const posts: IPost[] = useRecoilValue(postByUsername(userByUsername?._id));
  const currentUser: IUser = useRecoilValue(getCurrentUser);
  const [following, setFollowing] = useState(() => {
    if (currentUser) {
      return currentUser.following.includes(userByUsername?._id);
    }
  });
  const [totalFollower, setTotalFollower] = useState(
    () => userByUsername?.followers.length
  );

  const handleCopy = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const profileUrl: any = new URL(e.view.document.location.href);
    navigator.clipboard
      .writeText(profileUrl)
      .then(() => toast("Copyed to clipboard"));
  };

  const handleFollow = async () => {
    setFollowing((prev) => !prev);
    if (following) {
      setTotalFollower((prev) => prev - 1);
    } else {
      setTotalFollower((prev) => prev + 1);
    }
    await axios.post(`/users/follow/${userByUsername._id}`, null, {
      withCredentials: true,
    });
  };

  return (
    <Layout>
      <Button type="button" className="mt-5">
        <Link to={`/`}>
          <SquareArrowLeft />
        </Link>
      </Button>
      <div className="flex flex-col py-10 space-y-10">
        <div className="flex items-center justify-between p-1 ">
          <div className="p-1 border rounded-full border-primary w-fit">
            <img
              src={userByUsername?.profilePic?.url}
              alt={userByUsername?.username}
              className="w-20 rounded-full md:w-28"
            />
          </div>
          {username !== currentUser?.username && (
            <Button
              variant={following ? "outline" : "default"}
              size={"sm"}
              onClick={handleFollow}
            >
              {following ? "following" : "follow"}
            </Button>
          )}
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="flex items-center space-x-2 text-3xl">
                {userByUsername?.name}{" "}
                <span className="mx-4 ">
                  <BadgeCheck className=" text-primary" />
                </span>
              </h1>
              <Badge className="text-gray-500 w-fit" variant={"outline"}>
                @{userByUsername?.username}
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
          <p className="text-gray-400/90">{userByUsername?.bio}</p>
        </div>
        <div className="flex items-center space-x-5 text-gray-500 w-fit">
          <Badge className="text-gray-500 w-fit" variant={"outline"}>
            <span>
              {" "}
              <span className="font-bold ">
                {userByUsername?.following.length}
              </span>{" "}
              Following
            </span>
          </Badge>
          <Badge className="text-gray-500 w-fit" variant={"outline"}>
            <span>
              {" "}
              <span className="font-bold ">{totalFollower}</span> Followers
            </span>
          </Badge>
        </div>
      </div>
      <div>
        {userByUsername && posts ? (
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
