import { userState } from "@/atoms/userAtom";
import { axios } from "@/axios";
import CreatePost from "@/components/custom/CreatePost";
import FeedCard from "@/components/custom/FeedCard";
import Hero from "@/components/custom/Hero";
import Layout from "@/components/custom/Layout";
import { ModeToggle } from "@/components/custom/ModeToggle";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

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

const UserHomePage = () => {
  const [posts, setPost] = useState<Array<IPost>>();
  const user = useRecoilValue(userState);

  useEffect(() => {
    (async function getPosts() {
      const response = await axios.get("/posts", { withCredentials: true });
      setPost(response.data.data);
    })();
  }, []);
  return (
    <Layout>
      <div className="flex items-center justify-center w-full p-2">
        <ModeToggle />
      </div>
      <Hero />
      <CreatePost />
      {posts &&
        user &&
        posts?.map((post) => (
          <FeedCard
            key={post?._id}
            avatar={user?.profilePic?.url}
            username={user?.username}
            description={post?.text}
            imageUrl={post?.image?.url}
            postId={post?._id}
          />
        ))}
    </Layout>
  );
};

export default UserHomePage;
