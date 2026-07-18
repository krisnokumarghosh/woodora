"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { errorToast, successToast } from "@/lib/toasts";

const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordChecks = [
    { label: "8+ characters", pass: password.length >= 8 },
    { label: "1 uppercase letter", pass: /[A-Z]/.test(password) },
    { label: "1 number", pass: /[0-9]/.test(password) },
  ];

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const pass = formData.get("password") as string;
      const image = (formData.get("image") as string) || undefined;

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password: pass,
        image,
      });

      if (data) {
        successToast("Registration Successfull");
        router.push("/");
      } else if (error) {
        errorToast(error.message ?? "Something went wrong during signup");
        return;
      }
    } finally {
      setIsLoading(false);
    }
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
            Pull up
            <br />a{" "}
            <span className="text-[#A0522D] font-serif italic font-normal">
              seat.
            </span>
          </h1>
          <p className="text-[#F5F0E6]/50 text-[14.5px] mt-6 max-w-75 leading-relaxed">
            Create an account to save your collections, track orders, and get
            early access to new arrivals.
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
            New Account
          </p>
          <h2 className="text-[#1A1A1A] font-black text-[30px] leading-tight tracking-tight mb-2">
            Create your account
          </h2>
          <p className="text-[#1A1A1A]/50 text-[13.5px] mb-9">
            Join Woodora and start shopping curated furniture today.
          </p>

          <Form className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
            {/* Name */}
            <TextField isRequired name="name" type="text">
              <Label className="block text-[11px] font-bold tracking-[0.12em] uppercase text-[#1A1A1A]/45 mb-2">
                Full Name
              </Label>
              <Input
                placeholder="John Doe"
                className="w-full shadow-none bg-transparent border-0 border-b-2 border-[#1A1A1A]/15 focus:ring-0 focus:border-b-[#A0522D] rounded-none outline-none pb-2.5 text-[15px] placeholder:text-[#1A1A1A]/30 transition-colors"
              />
              <FieldError className="text-[12px] text-[#A0522D] mt-1.5" />
            </TextField>

            {/* Email */}
            <TextField
              isRequired
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
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full shadow-none bg-transparent border-0 border-b-2 border-[#1A1A1A]/15 focus:ring-0 focus:border-b-[#A0522D] rounded-none outline-none pb-2.5 text-[15px] placeholder:text-[#1A1A1A]/30 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-0 bottom-2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 8 10 8a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61C2.9 8.9 1 12 1 12s3 8 11 8a9.26 9.26 0 0 0 5.39-1.61M14.12 14.12a3 3 0 1 1-4.24-4.24M1 1l22 22" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              {/* live password checklist */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
                {passwordChecks.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-1.5 text-[11.5px]"
                  >
                    <span
                      className={`flex items-center justify-center w-3.5 h-3.5 rounded-full border transition-colors ${
                        c.pass
                          ? "bg-[#8A9678] border-[#8A9678]"
                          : "border-[#1A1A1A]/25"
                      }`}
                    >
                      {c.pass && (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-2.5 h-2.5 text-[#F5F0E6]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                    </span>
                    <span
                      className={
                        c.pass ? "text-[#1A1A1A]/70" : "text-[#1A1A1A]/40"
                      }
                    >
                      {c.label}
                    </span>
                  </div>
                ))}
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
              {isLoading ? "Creating account..." : "Create Account"}
              {!isLoading && (
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              )}
            </Button>
          </Form>

          <p className="text-center text-[13px] text-[#1A1A1A]/55 mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-[#1A1A1A] underline underline-offset-4 decoration-[#A0522D] decoration-2 hover:text-[#A0522D] transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
