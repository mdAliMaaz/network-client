import { cn } from "@/lib/utils";
import { ExternalLink, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { useState } from "react";

const Actions = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setLiked((prev) => !prev);
  };

  return (
    <div className="flex items-center p-2 space-x-3">
      <Heart
        className={`${cn(liked ? "text-red-500" : "")} cursor-pointer`}
        onClick={handleLike}
      />
      <MessageCircle className="cursor-pointer " />
      <Repeat2 className="cursor-pointer " />
      <ExternalLink className="cursor-pointer " />
    </div>
  );
};

export default Actions;
