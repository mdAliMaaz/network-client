import { userState } from "@/atoms/userAtom";
import { axios } from "@/axios";
import { cn } from "@/lib/utils";
import { IReply } from "@/types";
import { ExternalLink, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Loading from "./Loading";

interface ActionProps {
  type: string;
  likes: string[];
  totalLikes: number;
  totalReplys?: number;
  post_id: string;
  replies?: IReply[];
}

const Actions = (props: ActionProps) => {
  const user = useRecoilValue(userState);

  const [isLiked, setIsLiked] = useState(() => {
    if (user?._id) {
      return props?.likes?.includes(user?._id);
    }
  });

  const [totalReplys, setTotalReplys] = useState(props.totalReplys || 0);
  const [totalLikes, setTotalLikes] = useState(props.totalLikes);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen,setIsOpen] = useState(false);

  const handleLike = async (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setIsLiked((prev) => !prev);

    if (isLiked) {
      setTotalLikes((prev) => prev - 1);
    } else {
      setTotalLikes((prev) => prev + 1);
    }

    await axios.post(`/posts/like/${props.post_id}`, null, {
      withCredentials: true,
    });
  };

  const handleReply = async () => {
    if(text !== ''){
      try {
        setTotalReplys((prev) => prev + 1);
        setLoading(true)
        await axios.post(
          `/posts/reply/${props.post_id}`,
          { text },
          {
            withCredentials: true,
          }
        );
        setIsOpen(false)
        setLoading(false)
        setText("")
      } catch (error:any) {
        setText("")
        setLoading(false);
        console.log(error)
        setIsOpen(false)
      }
      finally{
        setText("")
        setLoading(false)
        setIsOpen(false)
      }
    }
    
  };

  const handleLikeAReply = async () => {
    console.log("liked a reply")
  };

  return (
    <div className="flex items-center p-2 space-x-3">
      <div className="flex items-center space-x-1">
        <Heart
          strokeWidth={3}
          absoluteStrokeWidth
          className={`${cn(isLiked ? "text-red-500" : "")} cursor-pointer`}
          onClick={props.type === "post" ? handleLike : handleLikeAReply}
        />
        <span className="text-sm text-gray-300">{totalLikes} likes</span>
      </div>
      <div className="flex items-center space-x-1">
        <Dialog open={isOpen}>
          <DialogTrigger asChild>
            <MessageCircle onClick={()=>setIsOpen(true)} className="cursor-pointer " />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Reply</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Input
                  name="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="col-span-8"
                  placeholder="message"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleReply} size="sm" type="submit">
              {loading && <Loading />}
                Reply
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <span className="text-sm text-gray-300">{totalReplys} replys</span>
      </div>
      <Repeat2 className="cursor-pointer " />
      <ExternalLink className="cursor-pointer " />
    </div>
  );
};

export default Actions;
