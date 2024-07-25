import { SignIn } from "@clerk/nextjs";
import SignInForm from "../sign-in";

const SignInPage = () => {
  return (
    <main className="auth-page">
      <SignIn />
      <SignInForm />
    </main>
  );
};

export default SignInPage;
