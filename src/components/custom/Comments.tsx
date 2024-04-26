import { Ellipsis } from "lucide-react";
import Actions from "./Actions";
import { IPost } from "@/types";

interface CommentsProps {
  username: string;
  userProfileUrl: string;
  createdAt: string;
  comment: string;
  likes: string[];
  totalLikes: number;
  post_id: string;
}

const Comments = (props: CommentsProps) => {
  return (
    <div className="flex items-center justify-between border-b">
      <div className="flex flex-col items-start">
        <div className="flex items-center w-full p-2 my-2 space-x-5">
          <div className="w-10 h-10">
            <img
              src={props.userProfileUrl}
              alt=""
              className="w-full rounded-full "
            />
          </div>
          <div>
            <span className="font-semibold ">{props.username}</span>
            <p className="text-gray-400 ">{props.comment}</p>
          </div>
        </div>
        <Actions
          post_id={props.post_id}
          totalLikes={props.totalLikes}
          type="reply"
          likes={props.likes}
        />
      </div>
      <div className="flex items-center space-x-3">
        <span>{props.createdAt}</span>
        <Ellipsis />
      </div>
    </div>
  );
};

export default Comments;
