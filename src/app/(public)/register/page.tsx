import RegisterForm from "@/components/auth/RegisterForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Register",
  description: "Create your Woodora account and start shopping today.",
};

const RegisterPage = () => {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-[#F5F0E6] px-6 py-12">
      <Suspense
        fallback={
          <div className="min-h-dvh flex items-center justify-center bg-[#F5F0E6]" />
        }
      >
        <RegisterForm />
      </Suspense>
    </div>
  );
};

export default RegisterPage;