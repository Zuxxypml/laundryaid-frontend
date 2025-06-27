import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  referral: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password is required"),
});

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const schema = isLogin ? loginSchema : registerSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const endpoint = isLogin ? "/api/login" : "/api/register";
    console.log("Send to backend:", data);

    // Example for future backend:
    // fetch(endpoint, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then(res => res.json())
    //   .then(response => console.log(response));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-poppins">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#127733] mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {!isLogin && (
            <>
              <input
                {...register("name")}
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              <input
                {...register("phone")}
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </>
          )}

          <input
            {...register("email")}
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <div className="relative">
            <input
              {...register("password")}
              placeholder="Password"
              className="w-full p-3 border rounded-lg pr-10"
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-sm text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {!isLogin && (
            <>
              <input
                {...register("referral")}
                placeholder="Referral Code (optional)"
                className="w-full p-3 border rounded-lg"
              />
            </>
          )}

          <button
            type="submit"
            className="w-full bg-[#c85f0b] hover:bg-orange-600 text-white py-3 rounded-lg"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-[#c85f0b] font-medium"
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
