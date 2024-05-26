import React from "react";

const Input = ({ title, register, type }) => {
  return (
    <input
      {...register}
      type={type ?? "text"}
      placeholder={title}
      className="outline-none bg-transparent border-2 border-baseColor rounded-3xl px-3 py-2 text-base w-full"
    />
  );
};

export default Input;
