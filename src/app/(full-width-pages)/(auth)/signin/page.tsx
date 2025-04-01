import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrubbe Dashboard",
  description:
    "Scrubbe dashboard for Developers",
};

export default function SignIn() {
  return <SignInForm />;
}
