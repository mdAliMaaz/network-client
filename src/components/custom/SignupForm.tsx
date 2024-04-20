import { authPageState } from "@/atoms/authPageAtom";
import { axios } from "@/axios";
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
import useToast from "@/hooks/useToast";
import { AxiosError } from "axios";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import Loading from "./Loading";

interface SignUpFormInput {
  name: string;
  username: string;
  email: string;
  password: string;
}

export function SignupForm() {
  const setAuthState = useSetRecoilState(authPageState);
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState<SignUpFormInput>({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const toast = useToast();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  async function handelSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/users/signup", input);
      if (data.message) {
        toast(data.message);
      }
      setLoading(false);
      toast("signup successfull");
      setAuthState("login");
    } catch (error: unknown) {
      setLoading(false);
      if (error instanceof AxiosError) {
        toast(error.response?.data?.error);
      }
    }
  }

  return (
    <form onSubmit={handelSubmit} className="w-full max-w-sm m-auto">
      <Card className="w-full max-w-sm m-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              id="fullname"
              type="text"
              placeholder="Bruce wayne"
              required
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="usename">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="batman"
              required
              value={input.username}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="batman@example.com"
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
              name="password"
              type="password"
              required
              value={input.password}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={loading} type="submit" className="full">
            <span>Sign up</span>
            {loading && <Loading />}
          </Button>
        </CardFooter>
        <CardFooter>
          Already have an account ?{" "}
          <span>
            <Button
              onClick={() => setAuthState("login")}
              type="button"
              variant={"link"}
              className="w-full"
            >
              Sign in
            </Button>
          </span>
        </CardFooter>
      </Card>
    </form>
  );
}
