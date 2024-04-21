import CreatePost from "@/components/custom/CreatePost";
import FeedCard from "@/components/custom/FeedCard";
import Hero from "@/components/custom/Hero";
import Layout from "@/components/custom/Layout";
import { ModeToggle } from "@/components/custom/ModeToggle";

const UserHomePage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center w-full p-2">
        <ModeToggle />
      </div>
      <Hero />
      <CreatePost />
      <FeedCard
        avatar="https://pbs.twimg.com/profile_images/1700165991295307776/c9ULDyMW_400x400.jpg"
        username="Mohammed Ali Maaz"
        description="It's my birthday🥳Want to do something that will give peace and happiness. What should I do?"
        imageUrl="https://pbs.twimg.com/media/GK-rPymXQAALf7Y?format=jpg&name=large"
        postId="1"
      />
    </Layout>
  );
};

export default UserHomePage;
