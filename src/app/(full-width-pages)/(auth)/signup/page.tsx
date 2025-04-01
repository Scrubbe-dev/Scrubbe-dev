import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrubbe Dashboard",
  description:
    "Scrubbe dashboard for Developers",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
