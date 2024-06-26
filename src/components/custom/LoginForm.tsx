import { authPageState } from "@/atoms/authPageAtom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import useToast from "@/hooks/useToast";
import { axios } from "@/axios";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { userState } from "@/atoms/userAtom";

interface LoginFormInput {
  email: string;
  password: string;
}

export function LoginForm() {
  const setAuthState = useSetRecoilState(authPageState);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [_, setUser] = useRecoilState(userState);

  const [input, setInput] = useState<LoginFormInput>({
    email: "",
    password: "",
  });

  const toast = useToast();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }


async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  try {
    setLoading(true);
    const { data } = await axios.post("/users/signin", input);

    if (data?.message) {
      localStorage.setItem("network-user", JSON.stringify(data?.data));
      setLoading(false);
      setUser(data?.data);
      toast(data?.message);
      navigate(`/`);
    }
  } catch (error: unknown) {
    setLoading(false);

    if (error instanceof AxiosError) {
      toast(error.response?.data?.error);
    }
  }
}
  return (
    <form className="w-full max-w-sm m-auto" onSubmit={handleSubmit}>
      <Card className="w-full max-w-sm m-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={loading} type="submit" className="w-full ">
            <span>Sign in</span>
            {loading && <Loading />}
          </Button>
        </CardFooter>
        <CardFooter>
          don't have an account ?{" "}
          <span>
            <Button
              onClick={() => setAuthState("signup")}
              type="button"
              variant={"link"}
              className="w-full"
            >
              Sign up
            </Button>
          </span>
        </CardFooter>
      </Card>
    </form>
  );
}
