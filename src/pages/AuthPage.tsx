import Layout from "@/components/custom/Layout";
import { LoginForm } from "@/components/custom/LoginForm";
import { SignupForm } from "@/components/custom/SignupForm";

const AuthPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        {/* <LoginForm /> */}
        <SignupForm />
      </div>
    </Layout>
  );
};

export default AuthPage;
