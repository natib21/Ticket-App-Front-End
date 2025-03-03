import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link ,useNavigate} from "react-router";
import useAuth from "../hook/useAuth";
const SignUp = () => {
  const { register, handleSubmit,watch, formState: { errors } } = useForm();
  const [success, setSuccess] = useState(false);
  const {loginAuth} = useAuth()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    console.log(data)
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user/signUp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), 
        });
    
        const result = await response.json();
    
        if (response.ok) {
          setSuccess(true);
          console.log("Login Successful:", result);
          navigate('/login')
         loginAuth(result.data,result.token)
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
          <h2 className="text-3xl font-semibold text-amber-500">
            <span role="img" aria-label="ticket">🎟️</span> Ticket App
          </h2>
          <h1 className="text-xl font-semibold text-gray-700">Create an Account</h1>
        </header>

        {success && <p className="text-green-500 text-center mb-4">Sign up successful! Please login.</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="userName"
              {...register("userName", { required: "Username is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your username"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              {...register("passwordConfirm", {
                required: "Confirming password is required",
                validate: value => value === watch('password') || "Passwords do not match"
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Confirm your password"
            />
            {errors.passwordConfirm && <p className="text-red-500 text-sm">{errors.passwordConfirm.message}</p>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account? 
          <Link to="/login" className="text-amber-500 hover:underline">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
