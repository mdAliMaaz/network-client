import { authPageState } from "@/atoms/authPageAtom";
import Layout from "@/components/custom/Layout";
import { LoginForm } from "@/components/custom/LoginForm";
import { SignupForm } from "@/components/custom/SignupForm";
import { useRecoilValue } from "recoil";

const AuthPage = () => {
  const authState = useRecoilValue(authPageState);

  console.log(authState);
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        {authState === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </Layout>
  );
};

export default AuthPage;
