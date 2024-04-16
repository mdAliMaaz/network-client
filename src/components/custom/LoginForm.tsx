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
import { useSetRecoilState } from "recoil";

export function LoginForm() {
  const setAuthState = useSetRecoilState(authPageState);
  
  return (
    <form className="w-full max-w-sm m-auto">
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
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
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
            <Button onClick={()=> setAuthState('signup')} type="button" variant={"link"} className="w-full">
              Sign up
            </Button>
          </span>
        </CardFooter>
      </Card>
    </form>
  );
}
