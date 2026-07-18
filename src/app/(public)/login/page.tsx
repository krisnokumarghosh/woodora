import LoginForm from "@/components/auth/LoginForm";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Login",
  description: "Login to your Woodora account and continue shopping.",
};

const RegisterPage = () => {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-[#F5F0E6] px-6 py-12">
        <LoginForm/>
    </div>
  );
};

export default RegisterPage;