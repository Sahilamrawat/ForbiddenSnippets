import React from "react";
import { useForm } from "react-hook-form";
import signup from "../assets/sign-up.svg";
import { useNavigate } from "react-router-dom";
function SignIn() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate('/login')
    console.log("User Data:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 ">
        <div className="bg-[#eeefa8c6] flex items-center  rounded-lg shadow-lg">
            
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-[#2E5077] mb-4">
                Sign Up
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <div>
                    <label className="block text-sm font-semibold">Full Name</label>
                    <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-semibold">Email</label>
                    <input
                    type="email"
                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email format" } })}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* DOB Field */}
                <div>
                    <label className="block text-sm font-semibold">Date of Birth</label>
                    <input
                    type="date"
                    {...register("dob", { required: "Date of Birth is required" })}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                    {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-semibold">Password</label>
                    <input
                    type="password"
                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters required" } })}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Enter your password"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                {/* Phone Number Field */}
                <div>
                    <label className="block text-sm font-semibold">Phone Number</label>
                    <input
                    type="tel"
                    {...register("phone", { required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" } })}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-[#2E5077] text-white p-2 rounded-lg font-semibold hover:bg-[#1F3A5F]">
                    Sign Up
                </button>
                </form>
            </div>
            <div>
                <img src={signup}  className='login-logo w-[600px] h-max  bg-white ' alt="image" />
            </div>
        </div>
        
    </div>
  );
}

export default SignIn;
