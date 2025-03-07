const API_URL = 
  window.location.hostname === "localhost"
  ? "http://127.0.0.1:8000/api/user/signUp"  // Local development
  : "https://ticketing-system-express-vhi3.onrender.com/api/user/signUp";  
import React from "react";
import { useForm } from "react-hook-form";

const UserForm = ({onClose}) => {

  const { register, handleSubmit, watch,formState: { errors } } = useForm();


  const onSubmit = async (data) => {
    console.log("User Data:", data);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log("user Create Successful:", result);
        onClose()
      
      } else {
        console.error("Create Failed:", result.message);
      }
    } catch (error) {
      console.error("Error during create:", error);
    }
  };
  
  

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create User</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
 
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            id="userName"
            type="text"
            {...register("userName", { required: "User Name is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.userName && <span className="text-red-500 text-sm">{errors.userName.message}</span>}
        </div>

  
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>


        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

       
        <div className="mb-4">
          <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="passwordConfirm"
            type="password"
            {...register("passwordConfirm", {
              required: "Please provide a password",
              validate: value => value === watch('password') || "Passwords do not match"
            })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.passwordConfirm && <span className="text-red-500 text-sm">{errors.passwordConfirm.message}</span>}
        </div>

    
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            id="role"
            {...register("role", { required: "Role is required" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="admin">Admin</option>
            <option value="agent">Agent</option>
            <option value="customer" defaultValue>
              Customer
            </option>
          </select>
          {errors.role && <span className="text-red-500 text-sm">{errors.role.message}</span>}
        </div>


        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
