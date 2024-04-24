import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Actions from "./Actions";
import Comments from "./Comments";
import CreateComment from "./CreateComment";
import { useEffect, useState } from "react";
import { axios } from "@/axios";
import { IPost, IUser } from "@/types";
import { Link } from "react-router-dom";

const PostDetailsCard = ({ metaData }: { metaData: IPost }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (metaData.postedBy) {
      try {
        (async function getUser() {
          const response = await axios.get(
            `/users/postedBy/${metaData.postedBy}`,
            {
              withCredentials: true,
            }
          );
          setUser(response.data);
        })();
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }, [metaData._id]);

  return (
    <div className="w-full py-5">
      <div className="flex gap-3">
        <Link to={`/user/${user?.username}`}>
          <Avatar>
            <AvatarImage src={user?.profilePic?.url} />
            <AvatarFallback>profile</AvatarFallback>
          </Avatar>
        </Link>
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
