import { Image } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { axios } from "@/axios";
import useToast from "@/hooks/useToast";
import { AxiosError } from "axios";
import Loading from "./Loading";
import { refreshPostsTriggerState } from "@/atoms/postAtom";
import { useSetRecoilState } from "recoil";

const CreatePost = () => {
  const toast = useToast();
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [files, setFiles] = useState<any>(null);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const setRefreshPostsTrigger = useSetRecoilState(refreshPostsTriggerState);

  const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setFiles(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();

      formData.append("postImg", files);
      formData.append("text", input);
      const response = await axios.post("/posts", formData, {
        withCredentials: true,
      });
      if (response.data.message) {
        setLoading(false);
        setImagePreview("");
        setInput("");
        setRefreshPostsTrigger((value) => value + 1);
        toast(response.data.message);
      }
    } catch (error: unknown) {
      setLoading(false);

      if (error instanceof AxiosError) {
        toast(error.response?.data?.error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-1 my-3 border rounded-md">
      <Input
        className="border-none rounded-none focus-visible:ring-0"
        placeholder="What's is happening?!"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        name="text"
        autoComplete="off"
      />
      <div className="my-5 border-[1px]"></div>
      {imagePreview && (
        <div className="p-2 size-72 md:size-96">
          <img
            src={imagePreview}
            alt="postImg"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      )}
      <div className="flex items-center justify-between p-2">
        <input
          className="hidden"
          id="postImg"
          type="file"
          accept="image/*"
          name="postImg"
          onChange={handlePreview}
        />
        <label htmlFor="postImg" className="cursor-pointer">
          <Image />
        </label>
        <div>
          <Button size={"sm"} className="rounded-full">
            <span>Post</span>
            {loading && <Loading />}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
