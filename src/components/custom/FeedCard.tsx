import { axios } from "@/axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ExternalLink, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface FeedCardProps {
  description: string;
  imageUrl?: string;
  postId: string;
  postedBy: string;
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
        async function getUser() {
          const response = await axios.get(
            `/users/postedBy/${props.postedBy}`,
            {
              withCredentials: true,
            }
          );
          setUser(response.data);
          setLoading(false);
        }
        getUser();
      } catch (error: any) {
        setLoading(false);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
  }, [props.postId]);

  return (
    <div className="w-full my-2 border rounded-lg">
      <Link to={`post/${props.postId}`}>
        <div className="flex items-center p-2 space-x-3">
          <Link to={`/${props.postedBy}`}>
            <Avatar>
              <AvatarImage src={user?.profilePic?.url} />
              <AvatarFallback>profile</AvatarFallback>
            </Avatar>
          </Link>
          <div>
            <h3>{user?.username}</h3>
            <p className="text-sm text-gray-500">{props.description}</p>
          </div>
        </div>

        <div className="m-1 w-fit">
          <img
            src={props.imageUrl}
            alt="post"
            className="mx-auto rounded-xl max-h-96"
          />
        </div>
        <div className="flex items-center p-2 space-x-3">
          <Heart
            className={cn(liked ? "text-red-500" : "")}
            onClick={handleLike}
          />
          <MessageCircle />
          <Repeat2 />
          <ExternalLink />
        </div>
      </Link>
    </div>
  );
};

export default FeedCard;
