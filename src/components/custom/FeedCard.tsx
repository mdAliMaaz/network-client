import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface FeedCardProps {
  avatar: string;
  username: string;
  description: string;
  imageUrl?: string;
}

const FeedCard = (props: FeedCardProps) => {
  return (
    <div className="w-full my-2 border rounded-md">
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
    </div>
  );
};

export default FeedCard;
