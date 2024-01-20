import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Register() {
  return (
    <div className="flex items-center justify-center h-screen touchesb">
    <div className="mx-auto max-w-[350px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-gray-500 dark:text-gray-400">Create your account by filling the details below</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="johndoe@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Register
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?
        <Link className="underline" href="/login">
          Login
        </Link>
      </div>
    </div>
    </div>
  )
}
