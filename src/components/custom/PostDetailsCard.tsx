import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Actions from "./Actions";
import Comments from "./Comments";
import CreateComment from "./CreateComment";
import { useRecoilValue } from "recoil";
import { userState } from "@/atoms/userAtom";

interface IPost {
  _id: string;
  postedBy: string;
  text: string;
  image: { public_id: string; url: string };
  likes: string[];
  replies: string[];
  createdAt: string;
  updatedAt: string;
}

const PostDetailsCard = ({ metaData }: { metaData: IPost }) => {
  const user = useRecoilValue(userState);

  return (
    <div className="w-full py-5">
      <div className="flex gap-3">
        <div>
          <Avatar>
            <AvatarImage src={user?.profilePic?.url} />
            <AvatarFallback>profile</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold">{user?.name}</h1>
          <p className="text-gray-500 ">{metaData?.text}</p>
        </div>
      </div>

      <img
        src={metaData?.image?.url}
        alt="post-img"
        className="w-full mt-2 rounded-lg"
      />
      <Actions />
      <CreateComment />
      <div className="flex flex-col">
        <Comments
          comment="I really need someone who can fix this shit."
          createdAt="5d"
          userProfileUrl="https://avatars.githubusercontent.com/u/130007307?v=4"
        />
      </div>
    </div>
  );
};

export default PostDetailsCard;
