"use client";
import Blog1 from "@/components/blogs/Blog1";
import Blog2 from "@/components/blogs/Blog2";
import Heading from "@/components/blogs/Heading";
import Paragraph from "@/components/blogs/Paragraph";
import Title from "@/components/blogs/Title";
import { param } from "framer-motion/client";
import { useParams } from "next/navigation";
import React from "react";

const Blog = () => {
  const params = useParams();
  console.log(params);

  const renderBlog = () => {
    switch (params.id) {
      case "how-to-run-out-of-home-advertising-efficiently":
        return <Blog1 />;
      case "how-to-increase-conversions-using-ooh":
        return <Blog2 />;

      default:
        return <p>Could not find the blog</p>;
    }
  };

  return <div className="max-w-[1240px] mx-auto p-5">{renderBlog()}</div>;
};

export default Blog;
