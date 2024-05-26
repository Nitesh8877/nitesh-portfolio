import React from "react";
import Input from "./Input";
import { Error } from "./utility";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const schema = z.object({
    name: z.string().min(3, { message: "Minimun 3 charecter required" }),
    lastname: z.string().min(3, { message: "Minimum 3 charecter required" }),
    email: z.string().email({ message: "Please enter valid email" }),
    query: z.string().min(10, { message: "Minimun 10 word's required" }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submit = (data) => {
    toast.success("Massage Send Successfully!");
    reset();
    navigate("/");
  };

  return (
    <div className="shadow-lg rounded-md p-4 flex-1 w-72 ">
      <h2 className="py-2 text-xl text-baseColor text-center">
      Don't hesitate to reach out.
      </h2>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-3 ">
        <div>
          <Input register={register("name")} type="text" title="Name" />
          {errors?.name && <Error>{errors?.name?.message}</Error>}
        </div>
        <div>
          <Input
            register={register("lastname")}
            type="text"
            title="Last Name"
          />
          {errors?.lastname && <Error>{errors?.lastname?.message}</Error>}
        </div>
        <div>
          <Input register={register("email")} type="email" title="Email" />
          {errors?.email && <Error>{errors?.email?.message}</Error>}
        </div>
        <div>
          <textarea
            {...register("query")}
            className="outline-none bg-transparent border-2 border-baseColor rounded-3xl px-3 py-2 text-base w-full resize-none"
            rows="5"
            placeholder="Your Query"
          ></textarea>
          {errors?.query && <Error>{errors?.query?.message}</Error>}
        </div>
        <div>
          <button
            formNoValidate
            className="bg-baseColor hover:text-baseColor border-baseColor text-2xl rounded-md  px-8 border-2 py-1  hover:bg-transparent transition-colors text-white  text-center w-full"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
