import { axios } from "@/axios";
import Layout from "@/components/custom/Layout";
import PostDetailsCard from "@/components/custom/PostDetailsCard";
import { Button } from "@/components/ui/button";
import { SquareArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

const PostDetailsPage = () => {
  const [metaData, setMetaData] = useState<IPost | null>();

  const { id } = useParams();
  useEffect(() => {
    (async function getPostData() {
      try {
        const response = await axios.get(`/posts/${id}`, {
          withCredentials: true,
        });
        setMetaData(response.data.data);
      } catch (error: any) {
        console.log(error.message);
        setMetaData(null);
      }
    })();
  }, []);

  return (
    <Layout>
      {metaData && (
        <div>
          <Link to={"/"}>
            <Button>
              <SquareArrowLeft />
            </Button>
          </Link>
          <PostDetailsCard metaData={metaData} />
        </div>
      )}
    </Layout>
  );
};

export default PostDetailsPage;
