import { SendHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CreateMessage = () => {
  return (
    <form className="absolute bottom-0 flex items-center w-full p-2 space-x-1">
      <Input placeholder="Message" />
      <Button
        type="submit"
        size={"icon"}
        variant={"outline"}
        className="border-primary"
      >
        <SendHorizontal className="text-primary" />
      </Button>
    </form>
  );
};

export default CreateMessage;
