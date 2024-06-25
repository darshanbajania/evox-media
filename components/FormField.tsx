import React from "react";

const FormField = ({ label = "Label", id, variant }) => {
  switch (variant) {
    case "text-area":
      return (
        <div className="flex mb-3">
          <label htmlFor={id} className="w-[200px] text-base text-[#1E1F22]">
            {label}
          </label>
          <textarea
            id={id}
            className="w-full border-1 flex-1 border-[#EBE1F2] bg-[#FEFCFF]"
          />
        </div>
      );

    default:
      return (
        <div className="flex mb-3">
          <label htmlFor={id} className="w-[200px] text-base text-[#1E1F22]">
            {label}
          </label>
          <input
            id={id}
            className="w-full border-1 flex-1 border-[#EBE1F2] bg-[#FEFCFF]"
          />
        </div>
      );
  }
};

export default FormField;
