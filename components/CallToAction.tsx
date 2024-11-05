"use client";
import { Button } from "@nextui-org/react";
import React from "react";

const CallToAction = ({ label, handleOnClick = () => {} }) => {
  return (
    <Button
      onClick={handleOnClick}
      radius="sm"
      className="bg-gradient-to-r from-[#E580FF] to-[#FD80A3] text-white text-[20px]"
      variant="solid"
    >
      {label}
    </Button>
  );
};

export default CallToAction;
