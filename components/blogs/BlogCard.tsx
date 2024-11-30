import { useRouter } from "next/navigation";
import React from "react";

const BlogCard = () => {
  const router = useRouter();
  const handleBlogClick = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };
  return (
    <div
      onClick={() => {
        handleBlogClick("how-to-run-out-of-home-advertising-efficiently");
      }}
      className="border-1 border-[#DBB5E5] rounded-lg relative h-[280px] sm:w-[400px] overflow-hidden cursor-pointer"
    >
      <img
        src="/blog-1-thumbnail.png"
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute bottom-0 left-0 bg-white p-2 rounded-lg w-[100%]">
        <h2 className="text-xl text-[#1E1F22] ">
          How to Run Out-of-Home Advertising Efficiently
        </h2>
        <p className="mt-2 text-[#51545C] truncate ...">
          Out-of-home (OOH) advertising remains a powerful tool
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
