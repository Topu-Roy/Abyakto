"use client";

import { createAuthClient } from "better-auth/react";
import { Button } from "@/components/ui/button";

const authClient = createAuthClient();

export default function SignUpPage() {
  const signUp = async (provider: "github") => {
    await authClient.signIn.social({
      provider,
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up for Abyakto</h1>
        
        <div className="space-y-4">
          <Button
            onClick={() => signUp("github")}
            className="w-full"
            variant="outline"
          >
            Sign up with GitHub
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <a href="/sign-in" className="text-primary hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}