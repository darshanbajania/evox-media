import React from "react";

const ReviewCard = ({ review, author }) => {
  return (
    <div className="w-[380px] relative flex ">
      <img src="quotes.png" className="w-[64px] h-[64px] -top-5  relative" />
      <div className="flex-1">
        <p className=" text-base flex-1 text-[#51545C]">{review}</p>
        <p className="mb-2 text-base text-right flex-1 ">-{author}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
