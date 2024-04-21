import { Image } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CreatePost = () => {
  return (
    <div className="w-full p-1 my-3 border rounded-md">
      <Input
        className="border-none focus-visible:ring-0"
        placeholder="Whats is happening?!"
      />
      <div className="my-5 border-[1px]"></div>
      <div className="flex items-center justify-between p-2">
        <input
          className="hidden"
          id="postimg"
          type="file"
          accept="image/*"
          name="postImg"
        />
        <label htmlFor="postimg" className="cursor-pointer">
          <Image />
        </label>
        <div>
          <Button size={"sm"} className="rounded-full">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
