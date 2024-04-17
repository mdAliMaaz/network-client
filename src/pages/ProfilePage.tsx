import { userState } from "@/atoms/userAtom";
import Layout from "@/components/custom/Layout";
import { Button } from "@/components/ui/button";
import { useRecoilValue } from "recoil";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  profilePic: string;
  followers: string;
  following: string;
  bio: string;
  isFrozen: boolean;
}

const ProfilePage = () => {
  const user: IUser = useRecoilValue(userState);

  const [input, setInput] = useState<Partial<IUser>>({
    name: user.name || "",
    username: user.username || "",
    email: user.email || "",
    bio: user.bio || "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <Layout>
      <div className="flex flex-col p-1 space-x-10 items-startems-center space md:items-center md:flex-row ">
        <div className="w-1/3 p-1 border rounded-full md:w-1/3 border-primary">
          <img
            src={user.profilePic}
            alt="profile"
            className="w-full rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-1">
          <h1 className="text-2xl capitalize md:text-4xl">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          <input
            className="hidden"
            id="profilePic"
            type="file"
            accept="image/*"
          />
          <Button className="w-1/2 md:w-full">
            <label className="w-full " htmlFor="profilePic">
              Upload
            </label>
          </Button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mt-2 md:gap-4">
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
    </Layout>
  );
};

export default ProfilePage;
