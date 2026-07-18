import RegisterForm from "@/components/auth/RegisterForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Register",
  description: "Create your Woodora account and start shopping today.",
};

const RegisterPage = () => {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-[#F5F0E6] px-6 py-12">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;