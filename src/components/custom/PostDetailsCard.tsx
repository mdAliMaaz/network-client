import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Actions from "./Actions";
import Comments from "./Comments";

const PostDetailsCard = () => {
  return (
    <div className="w-full py-5">
      <div className="flex gap-3">
        <div>
          <Avatar>
            <AvatarImage src="https://pbs.twimg.com/profile_images/1700165991295307776/c9ULDyMW_400x400.jpg" />
            <AvatarFallback>profile</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold">Mohammed Ali Maaz</h1>
          <p className="text-gray-500 ">
            Hey guys, I need a frontend developer for Making a canvas like
            editor Using react and vanilla html Pls RT as it's urgent Dms are
            open Price normal rakhna pls
          </p>
        </div>
      </div>

      <img
        src="https://pbs.twimg.com/media/GK8h6MjW4AAiuYs?format=jpg&name=large"
        alt="post-img"
        className="w-full mt-2 rounded-lg"
      />
      <Actions />
      <div className="flex flex-col">
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </div>
    </div>
  );
};

export default PostDetailsCard;
