import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import signup from "../assets/sign-up.svg"; // Using the same image as Sign Up
import SavingsIcon from '@mui/icons-material/Savings';

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    navigate("/"); // Redirect to the dashboard or homepage after login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className=" h-max w-[45vw] flex items-center  rounded-lg shadow-lg bg-white">
        
        {/* Form Section */}
        <div className="bg-white flex flex-col items-center justify-center rounded-lg shadow-lg h-[100%] w-[100%] max-w-md">
            <div className="flex items-center gap-2 mt-4">
            <SavingsIcon className='text-[#191A19]' sx={{ fontSize: '6rem' }} />
            <h1 className='ml-2 font-bold text-[38px]'>Share Pool</h1>
            </div>
          <h2 className="text-2xl font-bold text-center text-[#2E5077] mb-4">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
                })}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters required" },
                })}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#191A19] text-white p-2 rounded-lg font-semibold hover:bg-[#48823d]">
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-4 mb-10 text-center text-gray-600">
            Don't have an account? 
            <span 
              className="text-blue-500 cursor-pointer ml-1 hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img src={signup} className="login-logo w-[600px] h-max bg-white" alt="Login Illustration" />
        </div>

      </div>
    </div>
  );
}

export default Login;
