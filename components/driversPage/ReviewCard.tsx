import React from "react";

const ReviewCard = ({ author, designation, review }) => {
  return (
    <div className="slider-card">
      <div className="border-1 border-[#FD80A3] h-full rounded-lg p-[1rem]">
        <div className="flex gap-[16px]">
          <img
            className="h-[70px] w-[70px] rounded-full"
            src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"
          />
          <div>
            <p className="font-medium text-[20px] text-[#51545C]">{author}</p>
            <p className="text-[16px] text-[#51545C]">{designation}</p>
          </div>
        </div>
        <div className="flex gap-[8px] mt-5">
          <img src="quotes.png" className=" w-[40px] h-[40px]  relative" />
          <div>
            <p className="text-[16px] text-[#1E1F22]">{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
