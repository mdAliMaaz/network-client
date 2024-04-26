import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  Ellipsis,
  ExternalLink,
  Heart,
  MessageCircle,
  Repeat2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecoilValue } from "recoil";
import { userById } from "@/atoms/userAtom";

interface FeedCardProps {
  description: string;
  imageUrl?: string;
  postId: string;
  postedBy: string;
  createdAt: string;
}

const FeedCard = (props: FeedCardProps) => {
  const user = useRecoilValue(userById(props.postedBy));
  
  const [liked, setLiked] = useState(false);

  const handleLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setLiked((prev) => !prev);
  };

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
          <div className="flex items-center space-x-2 w-fit">
            <span className="text-sm text-gray-400 w-fit">
              {formatDistanceToNow(new Date(props?.createdAt), {
                addSuffix: true,
              })}
            </span>
            <Ellipsis />
          </div>
        </div>

        <Link to={`post/${props?.postId}`} className="m-1 w-fit">
          <img
            src={props?.imageUrl}
            alt="post"
            className="mx-auto rounded-xl max-h-96"
          />
        </Link>
        <div className="flex items-center p-2 space-x-3">
          <Heart
            className={cn(liked ? "text-red-500" : "")}
            onClick={handleLike}
          />
          <MessageCircle />
          <Repeat2 />
          <ExternalLink />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
