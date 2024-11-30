"use client";

import BlogCard from "@/components/blogs/BlogCard";
import { useRouter } from "next/navigation";
import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-[5rem] mb-[300px] xl:mb-[0px] flex flex-wrap gap-8 px-5">
      <BlogCard
        title={"How to Run Out-of-Home Advertising Efficiently"}
        description={"Out-of-home (OOH) advertising remains a powerful tool"}
        imagePath={"/blog-1-thumbnail.png"}
        blogId={"how-to-run-out-of-home-advertising-efficiently"}
      />
      <BlogCard
        title={"How to Increase Conversions Using OOH"}
        description={" Your Brand's Bold Leap!"}
        imagePath={"/ooh-advertising.jpg"}
        blogId={"how-to-increase-conversions-using-ooh"}
      />
      <BlogCard
        title={"From Empty Seats to Eye-Catching Ads"}
        description={"EVOX Media’s Revolution in Hyperlocal OOH Advertising"}
        imagePath={"/ooh-advertising2.jpg"}
        blogId={"from-empty-seats-to-eye-catching-ads"}
      />
    </div>
  );
};

export default Blogs;
