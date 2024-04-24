import { postState } from "@/atoms/postAtom";
import { userState } from "@/atoms/userAtom";
import CreatePost from "@/components/custom/CreatePost";
import FeedCard from "@/components/custom/FeedCard";
import Hero from "@/components/custom/Hero";
import Layout from "@/components/custom/Layout";
import { ModeToggle } from "@/components/custom/ModeToggle";
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
  const user = useRecoilValue(userState);
  const posts = useRecoilValue<Array<IPost>>(postState);

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
            description={post?.text}
            imageUrl={post?.image?.url}
            postId={post?._id}
            postedBy={post?.postedBy}
            createdAt={post?.createdAt}
          />
        ))}
    </Layout>
  );
};

export default UserHomePage;
