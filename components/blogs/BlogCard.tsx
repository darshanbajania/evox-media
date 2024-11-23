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
        src="blog-1-banner.webp"
        className="w-full h-[300px] object-contain"
      />
      <div className="absolute bottom-0 left-0 bg-white p-2 rounded-lg">
        <h2 className="text-xl">
          How to Run Out-of-Home Advertising Efficiently
        </h2>
        <p>How to Run Out-of-Home Advertising Efficiently</p>
      </div>
    </div>
  );
};

export default BlogCard;
