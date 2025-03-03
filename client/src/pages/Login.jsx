import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link ,useNavigate} from "react-router";
import useAuth from "../hook/useAuth";
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const {loginAuth} = useAuth()
  const onSubmit = async(data) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), 
        });
    
        const result = await response.json();
    
        if (response.ok) {
          console.log("Login Successful:", result);
          navigate('/')
         loginAuth(result.data, result.token)
        } else {
          console.error("Login Failed:", result.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
 

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-700">
            <span role="img" aria-label="ticket">🎟️</span> Ticket App
          </h2>
          <h1 className="text-xl font-semibold text-gray-700">Welcome Back</h1>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
          
              {...register("password", { required: "password is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account? 
          <Link to="/signup" className="text-amber-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
