import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your Woodora account and continue shopping.",
};

const LoginPage = () => {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-[#F5F0E6] px-6 py-12">
      <Suspense
        fallback={
          <div className="min-h-dvh flex items-center justify-center bg-[#F5F0E6]" />
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;