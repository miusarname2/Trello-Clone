import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function forgotPass() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <Card className="max-w-md mx-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Forgot Your Password?</CardTitle>
          <CardDescription>
            Please enter your full name and email address. We will send you an email to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" placeholder="Enter your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" required type="email" />
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Remembered your password?
            <Link className="underline" href="/login">
              Go back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
