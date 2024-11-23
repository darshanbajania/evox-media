"use client";

import BlogCard from "@/components/blogs/BlogCard";
import { useRouter } from "next/navigation";
import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-[5rem] mb-[300px] xl:mb-[0px] flex flex-wrap gap-8 px-5">
      <BlogCard />
    </div>
  );
};

export default Blogs;
