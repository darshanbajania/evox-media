import { useRouter } from "next/navigation";
import React from "react";

const BlogCard = ({ title, imagePath, description, blogId }) => {
  const router = useRouter();
  const handleBlogClick = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };
  return (
    <div
      onClick={() => {
        handleBlogClick(blogId);
      }}
      className="border-1 border-[#DBB5E5] rounded-lg relative h-[250px] sm:w-[400px] overflow-hidden cursor-pointer"
    >
      <img src={imagePath} className="w-full h-[300px] object-cover" />
      <div className="absolute bottom-0 left-0 bg-white p-2 rounded-lg w-[100%]">
        <h2 className="text-xl text-[#1E1F22] ">{title}</h2>
        <p className="mt-2 text-[#51545C] truncate ...">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
