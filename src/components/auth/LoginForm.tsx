"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { ArrowUpRight, Eye, EyeSlash } from "@gravity-ui/icons";
import { errorToast, successToast } from "@/lib/toasts";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const pass = formData.get("password") as string;

      const { data, error } = await authClient.signIn.email({
        email,
        password: pass,
      });

      if (data) {
        successToast("Login Successfull");
        router.push(redirectTo);
      } else if (error) {
        errorToast(error.message ?? "Something went wrong during signup");
        return;
      }
    } finally {
      setIsLoading(false);
    }
  };

   const handleGoogleSignup = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="w-full flex  bg-[#F5F0E6]">
      {/* Left brand panel */}
      <div className="hidden lg:flex lg:w-[40%] relative bg-[#1A1A1A] flex-col justify-between p-14 overflow-hidden rounded-xl">
        {/* faint background chair line art */}
        <svg
          viewBox="0 0 400 400"
          className="absolute -right-16 -bottom-16 w-105 h-105 opacity-[0.06] pointer-events-none"
          fill="none"
          stroke="#C9A876"
          strokeWidth="2"
        >
          <path d="M90 260 L90 340 M310 260 L310 340 M90 260 L310 260 L310 180 Q310 150 280 150 L120 150 Q90 150 90 180 Z M120 150 L120 90 Q120 60 150 60 L250 60 Q280 60 280 90 L280 150" />
        </svg>

        {/* brand mark */}
        <Link href="/" className="relative z-10 flex items-center gap-2 w-fit">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-[#A0522D]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18v3M18 18v3M4 12v6h16v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2ZM6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          </svg>
          <span className="text-[#F5F0E6] font-bold tracking-[0.2em] text-[13px] uppercase">
            Woodora
          </span>
        </Link>

        {/* headline */}
        <div className="relative z-10">
          <p className="text-[#8A9678] text-[11px] font-bold tracking-[0.28em] uppercase mb-5">
            Member Access
          </p>
          <h1 className="text-[#F5F0E6] font-black text-[58px] leading-[0.94] tracking-tight">
            Find
            <br />
            comfort{" "}
            <span className="text-[#A0522D]  italic font-normal">again.</span>
          </h1>
          <p className="text-[#F5F0E6]/50 text-[14.5px] mt-6 max-w-75 leading-relaxed">
            Log in to continue shopping, save your favorite pieces, and track
            your orders.
          </p>
        </div>

        {/* bottom row: rotating stamp badge */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="relative w-23 h-23 shrink-0">
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full animate-[spin_16s_linear_infinite]"
            >
              <defs>
                <path
                  id="badgeCircle"
                  d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                />
              </defs>
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="#8A9678"
                strokeWidth="0.75"
                opacity="0.4"
              />
              <text fontSize="8.4" letterSpacing="2.5" fill="#8A9678">
                <textPath href="#badgeCircle">
                  HANDCRAFTED QUALITY • EST. 2024 •
                </textPath>
              </text>
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-[#C9A876] absolute inset-0 m-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18v3M18 18v3M4 12v6h16v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2ZM6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
            </svg>
          </div>
          <p className="text-[#F5F0E6]/35 text-[12px] leading-snug max-w-32.5">
            Every piece, sourced and finished with care.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-95">
          {/* mobile brand mark */}
          <div className="lg:hidden flex items-center gap-2 mb-10 justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-[#A0522D]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18v3M18 18v3M4 12v6h16v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2ZM6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
            </svg>
            <span className="text-[#1A1A1A] font-bold tracking-[0.2em] text-[13px] uppercase">
              Woodora
            </span>
          </div>

          <p className="text-[#A0522D] text-[11px] font-bold tracking-[0.28em] uppercase mb-3">
            Existing User
          </p>
          <h2 className="text-[#1A1A1A] font-black text-[30px] leading-tight tracking-tight mb-2">
            Login to your account
          </h2>
          <p className="text-[#1A1A1A]/50 text-[13.5px] mb-9">
            Log in to continue shopping, save your favorite pieces, and track
            your orders.
          </p>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="w-full h-12 rounded-full border-2 border-[#1A1A1A]/15 text-[#1A1A1A] text-[13.5px] font-semibold flex items-center justify-center gap-2.5 hover:border-[#1A1A1A]/40 hover:bg-white/50 transition-colors duration-300 disabled:opacity-60"
          >
            <FcGoogle />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="flex-1 h-px bg-[#1A1A1A]/10" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#1A1A1A]/35">
              or
            </span>
            <div className="flex-1 h-px bg-[#1A1A1A]/10" />
          </div>

          <Form className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
            {/* Email */}
            <TextField
              isRequired
              defaultValue="huge@gmail.com"
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#1A1A1A]/45 mb-2">
                Email
              </Label>
              <Input
                placeholder="john@example.com"
                className="w-full shadow-none bg-transparent border-0 border-b-2 border-[#1A1A1A]/15 focus:ring-0 focus:border-b-[#A0522D] rounded-none outline-none pb-2.5 text-[15px] placeholder:text-[#1A1A1A]/30 transition-colors"
              />
              <FieldError className="text-[12px] text-[#A0522D] mt-1.5" />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              defaultValue="Huge@123"
              minLength={8}
              name="password"
              type={showPassword ? "text" : "password"}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#1A1A1A]/45 mb-2">
                Password
              </Label>
              <div className="relative">
                <Input
                  placeholder="Enter your password"
                  className="w-full shadow-none bg-transparent border-0 border-b-2 border-[#1A1A1A]/15 focus:ring-0 focus:border-b-[#A0522D] rounded-none outline-none pb-2.5 text-[15px] placeholder:text-[#1A1A1A]/30 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-0 bottom-2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeSlash /> : <Eye />}
                </button>
              </div>

              <FieldError className="text-[12px] text-[#A0522D] mt-1.5" />
            </TextField>

            {/* Form-level error */}
            {formError && (
              <p className="text-[12.5px] text-[#A0522D] bg-[#A0522D]/8 border border-[#A0522D]/20 rounded-sm px-3 py-2.5">
                {formError}
              </p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              isDisabled={isLoading}
              className="group w-full h-13 mt-2 rounded-full bg-[#1A1A1A] text-[#F5F0E6] text-[14.5px] font-semibold flex items-center justify-center gap-2 hover:bg-[#A0522D] transition-colors duration-300 disabled:opacity-60"
            >
              {isLoading ? "Logging in..." : "Login"}
              {!isLoading && <ArrowUpRight />}
            </Button>
          </Form>

          <p className="text-center text-[13px] text-[#1A1A1A]/55 mt-8">
            Don&apos;t have an account?{" "}
            <Link
              href={`/register?redirect=${redirectTo}`}
              className="font-bold text-[#1A1A1A] underline underline-offset-4 decoration-[#A0522D] decoration-2 hover:text-[#A0522D] transition-colors"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
