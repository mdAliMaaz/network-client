import { userState } from "@/atoms/userAtom";
import { axios } from "@/axios";
import { cn } from "@/lib/utils";
import { ExternalLink, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { useState } from "react";
import { useRecoilValue } from "recoil";

interface ActionProps {
  type: string;
  likes: string[];
  totalLikes: number;
  totalReplys: number;
  post_id: string;
}

const Actions = (props: ActionProps) => {
  const user = useRecoilValue(userState);

  const [isLiked, setIsLiked] = useState(() => {
    if (user?._id) {
      return props?.likes?.includes(user?._id);
    }
  });

  const [totalReplys, setTotalReplys] = useState(props.totalReplys);

  const [totalLikes, setTotalLikes] = useState(props.totalLikes);

  const handleLike = async (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    
    e.preventDefault();
    setIsLiked((prev) => !prev);
    
    if (isLiked) {
      setTotalLikes((prev) => prev - 1);
    } else {
      setTotalLikes((prev) => prev + 1);
    }

    await axios.post(
      `/posts/like/${props.post_id}`,
      {},
      { withCredentials: true }
    );
  };

  return (
    <div className="flex items-center p-2 space-x-3">
      <div className="flex items-center space-x-1">
        <Heart
          strokeWidth={3}
          absoluteStrokeWidth
          className={`${cn(isLiked ? "text-red-500" : "")} cursor-pointer`}
          onClick={handleLike}
        />
        <span className="text-sm text-gray-300">{totalLikes} likes</span>
      </div>
      <div className="flex items-center space-x-1">
        <MessageCircle className="cursor-pointer " />
        <span className="text-sm text-gray-300">{totalReplys} replys</span>
      </div>
      <Repeat2 className="cursor-pointer " />
      <ExternalLink className="cursor-pointer " />
    </div>
  );
};

export default Actions;
