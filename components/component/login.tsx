"use client"

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import '@/components/styles/extra-login.css'

export function Login() {
  return (
    <div className="flex items-center justify-center h-screen tomodi">
      <Card key="1" className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative space-y-2">
              <div className="flex items-center">
                <Label htmlFor="email">Email</Label>
              </div>
              <Input
                className="pl-8"
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="relative space-y-2">
              <div className="flex">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input className="pl-8" id="password" required type="password" />
              <Link
                className="absolute right-2 inline-block text-sm underline"
                href="/fpass"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
            <Button className="w-full mt-4" variant="outline" onClick={()=>{
              window.location.href= "/register";
            }}>
              Register
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
