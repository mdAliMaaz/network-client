import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Actions from "./Actions";
import Comments from "./Comments";
import { IPost } from "@/types";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecoilValue } from "recoil";
import { userById } from "@/atoms/userAtom";

const PostDetailsCard = ({ metaData }: { metaData: IPost }) => {
  const user = useRecoilValue(userById(metaData.postedBy));

  return (
    <div className="w-full py-5">
      <div className="flex gap-3">
        <Link to={`/user/${user?.username}`}>
          <Avatar>
            <AvatarImage src={user?.profilePic?.url} />
            <AvatarFallback>
              <Skeleton className="w-12 h-12 rounded-full" />
            </AvatarFallback>
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
      <Actions
        type="post"
        totalLikes={metaData?.likes?.length}
        totalReplys={metaData?.replies?.length}
        post_id={metaData._id}
        likes={metaData.likes}
        replies={metaData.replies}
      />
      <div className="flex flex-col">
        {metaData?.replies?.map((item) => (
          <Comments
          username={item?.username}
            likes={item?.likes}
            post_id={metaData?._id}
            totalLikes={item?.likes?.length}
            comment={item?.text}
            createdAt={item?.createdAt}
            userProfileUrl={item?.userProfilePic}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default PostDetailsCard;
