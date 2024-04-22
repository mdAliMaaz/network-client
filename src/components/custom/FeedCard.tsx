import { axios } from "@/axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  Ellipsis,
  ExternalLink,
  Heart,
  MessageCircle,
  Repeat2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface FeedCardProps {
  description: string;
  imageUrl?: string;
  postId: string;
  postedBy: string;
  createdAt: string;
}

interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  profilePic: { url: string; public_id: string };
  followers: string;
  following: string;
  bio: string;
  isFrozen: boolean;
}

const FeedCard = (props: FeedCardProps) => {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const handleLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setLiked((prev) => !prev);
  };

  useEffect(() => {
    if (props.postedBy) {
      try {
        setLoading(true);
        (async function getUser() {
          const response = await axios.get(
            `/users/postedBy/${props.postedBy}`,
            {
              withCredentials: true,
            }
          );
          setUser(response.data);
          setLoading(false);
        })();
      } catch (error: any) {
        setLoading(false);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
  }, [props.postId]);

  return (
    <div className="flex w-full my-4 border rounded-lg">
      <div className="w-full ">
        <div className="flex items-center p-2 space-x-3">
          <Link to={`/${props?.postedBy}`}>
            <Avatar>
              <AvatarImage src={user?.profilePic?.url} />
              <AvatarFallback>profile</AvatarFallback>
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
