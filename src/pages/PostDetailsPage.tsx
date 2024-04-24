import { postDetails } from "@/atoms/postDetailsAtom";
import Layout from "@/components/custom/Layout";
import PostDetailsCard from "@/components/custom/PostDetailsCard";
import { Button } from "@/components/ui/button";
import { SquareArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

const PostDetailsPage = () => {
  const { id } = useParams();
  const metaData = useRecoilValue(postDetails(id));
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
