import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hook/useAuth";
import { useEffect } from "react";
import { createTicket } from "../services/ApiTicket";
const TicketForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {getToken} = useAuth()
  const token = getToken()
  const [errorMessage, setErrorMessage] = useState("")
  const onSubmit = async(data) => {
    try {
      const result = await createTicket(data, token);
      if (result) {
        console.log("Ticket created successfully:", result);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
 

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create Ticket</h2>
      {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)} >
   
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>


        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: "Description is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Create Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
