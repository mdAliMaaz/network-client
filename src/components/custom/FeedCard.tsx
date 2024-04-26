import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Ellipsis
} from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecoilValue } from "recoil";
import { userById } from "@/atoms/userAtom";
import Actions from "./Actions";

interface FeedCardProps {
  description: string;
  imageUrl?: string;
  postId: string;
  postedBy: string;
  createdAt: string;
  totalLikes: number;
  totalReplys: number;
  likes:string[];
}

const FeedCard = (props: FeedCardProps) => {
  const user = useRecoilValue(userById(props.postedBy));
  
  const date = formatDistanceToNow(new Date(props?.createdAt), {
    addSuffix: false,
  }).replace(/about/g, ""); // This regex matches "about" or "days" globally in the string

  return (
    <div className="flex w-full my-4 border rounded-lg">
      <div className="w-full ">
        <div className="flex items-center p-2 space-x-3 ">
          <Link
            to={`/user/${user?.username}`}
            className="border rounded-full border-primary p-[1px]"
          >
            <Avatar>
              <AvatarImage src={user?.profilePic?.url} />
              <AvatarFallback>
                <Skeleton className="w-12 h-12 rounded-full" />
              </AvatarFallback>
            </Avatar>
          </Link>
          <div className="w-full">
            <div>
              <h3>{user?.username}</h3>
              <p className="text-sm text-gray-500">{props.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 w-36 lg:w-28 sm:w-32 ">
            <span className="text-sm text-gray-400 ">{date}</span>
            <Ellipsis />
          </div>
        </div>

        <Link to={`post/${props?.postId}`} className="m-1 w-fit">
          {props?.imageUrl && (
            <img
              src={props?.imageUrl}
              alt="post"
              className="mx-auto rounded-xl max-h-96"
            />
          )}
        </Link>
        <Actions
          likes={props.likes}
          type="post"
          totalLikes={props.totalLikes}
          totalReplys={props.totalReplys}
          post_id={props.postId}
        />
      </div>
    </div>
  );
};

export default FeedCard;
