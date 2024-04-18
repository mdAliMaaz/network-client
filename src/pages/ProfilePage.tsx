import { userProfileState } from "@/atoms/userAtom";
import Layout from "@/components/custom/Layout";
import { Button } from "@/components/ui/button";
import { useRecoilValue } from "recoil";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SquareArrowLeft } from "lucide-react";
import { axios } from "@/axios";
import useToast from "@/hooks/useToast";
interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  profilePic: { url: string; public_id: string };
  followers: string;
  following: string;
  bio: string;
  isFrozen: boolean;
}

const ProfilePage = () => {
  const user = useRecoilValue(userProfileState);
  const toast =  useToast();
  const [input, setInput] = useState<Partial<IUser>>({
    name: user.name || "",
    username: user.username || "",
    email: user.email || "",
    bio: user.bio || "",
  });

  const [files, setFiles] = useState<any>();
  
  const [profilePreview, seetProfilePreview] = useState<any>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  async function handleImagePreview(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setFiles(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        seetProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  
async  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await axios.patch('/users/update',{input},{withCredentials: true});
    toast(response.data.message)
  }
  
  async function handleImageUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (files) {
      if (profilePreview) {
        const formData = new FormData();
        formData.append("profile", files);
        const response = await axios.post("/images/uploadSingle", formData, {
          withCredentials: true,
        });
        toast(response.data.message)
      }
    }
  }
  return (
    <Layout>
      <div>
        <form
          onSubmit={handleImageUpload}
          className="flex flex-col items-center p-1 md:space-x-10 md:items-center md:flex-row "
        >
          <div className="w-1/3 p-1 border rounded-full md:w-1/3 border-primary">
            <img
              src={profilePreview || user.profilePic.url}
              alt="profile"
              className="w-full rounded-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-1">
            <h1 className="text-2xl capitalize md:text-4xl">{input.name}</h1>
            <p className="text-gray-600">{input.email}</p>
            <input
              className="hidden"
              id="profilePic"
              type="file"
              accept="image/*"
              name="profile"
              onChange={handleImagePreview}
            />

            <Button type="button" className="w-1/2 md:w-full">
              <label className="w-full " htmlFor="profilePic">
                Upload
              </label>
            </Button>
            <Button
              type="submit"
              variant={"secondary"}
              className="w-1/2 md:w-full"
            >
              save
            </Button>
          </div>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-2 ">
            <Input
              name="name"
              onChange={handleChange}
              placeholder="name"
              value={input.name}
            />
            <Input
              name="username"
              onChange={handleChange}
              placeholder="username"
              value={input.username}
            />
            <Input
              name="email"
              onChange={handleChange}
              placeholder="email"
              value={input.email}
            />
            <Textarea
              name="bio"
              onChange={handleChange}
              placeholder="bio..."
              value={input.bio}
            />
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>

      <Button type="button" className="mt-5 ">
        <Link to={`/${user.name}`}>
          <SquareArrowLeft />
        </Link>
      </Button>
    </Layout>
  );
};

export default ProfilePage;
