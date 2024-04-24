import { postDetails } from "@/atoms/postDetailsAtom";
import { axios } from "@/axios";
import Layout from "@/components/custom/Layout";
import PostDetailsCard from "@/components/custom/PostDetailsCard";
import { Button } from "@/components/ui/button";
import { SquareArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
