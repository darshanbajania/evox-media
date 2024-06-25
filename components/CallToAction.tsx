import { Button } from "@nextui-org/react";
import React from "react";

const CallToAction = ({ label }) => {
  return (
    <Button
      className="bg-gradient-to-r from-[#E580FF] to-[#FD80A3] text-white"
      variant="solid"
    >
      {label}
    </Button>
  );
};

export default CallToAction;
