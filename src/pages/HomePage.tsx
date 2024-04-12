import Hero from "@/components/custom/Hero";
import Layout from "@/components/custom/Layout";
import { ModeToggle } from "@/components/custom/ModeToggle";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center w-full p-2">
        <ModeToggle />
      </div>
      <Hero />
    </Layout>
  );
};

export default HomePage;
