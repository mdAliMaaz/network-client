import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ExternalLink, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface FeedCardProps {
  avatar: string;
  username: string;
  description: string;
  imageUrl?: string;
  postId: string;
}

const FeedCard = (props: FeedCardProps) => {
  const [liked, setLiked] = useState(false);

  const handleLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setLiked((prev) => !prev);
  };

  return (
    <div className="w-full border rounded-lg">
      <Link to={`post/${props.postId}`}>
        <div className="flex items-center p-2 space-x-3">
          <Avatar>
            <AvatarImage src={props.avatar} />
            <AvatarFallback>profile</AvatarFallback>
          </Avatar>
          <div>
            <h3>{props.username}</h3>
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
