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
import { useSetRecoilState } from "recoil";
import useToast from "@/hooks/useToast";
import useLocalStroage from "@/hooks/useLocalStroage";
import { axios } from "@/axios";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface LoginFormInput {
  email: string;
  password: string;
}

export function LoginForm() {
  const setAuthState = useSetRecoilState(authPageState);
  const navigate = useNavigate();

  const [input, setInput] = useState<LoginFormInput>({
    email: "",
    password: "",
  });

  const { setValue } = useLocalStroage();

  const toast = useToast();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const { data } = await axios.post("/users/signin", input, {
        withCredentials: true,
      });

      if (data?.message) {
        setValue("network-user", data?.data);
        toast(data?.message);
        navigate(`/${data.data.username}`);
      }
    } catch (error: unknown) {
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
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardFooter>
        <CardFooter>
          don't have an account{" "}
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