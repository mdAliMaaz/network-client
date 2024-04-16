import { authPageState } from "@/atoms/authPageAtom";
import axios from "axios";
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

interface LoginFormInput {
  email: string;
  password: string;
}

export function LoginForm() {
  const setAuthState = useSetRecoilState(authPageState);
  const [input, setInput] = useState<LoginFormInput>({
    email: "",
    password: "",
  });

  const toast = useToast("login up complete");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/users/signin",
      input,
      { withCredentials: true }
    );
    toast();
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
