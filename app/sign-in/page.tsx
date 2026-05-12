"use client";

import { createAuthClient } from "better-auth/react";
import { Button } from "@/components/ui/button";

const authClient = createAuthClient();

export default function SignInPage() {
  const signIn = async (provider: "github") => {
    await authClient.signIn.social({
      provider,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md p-8">
        <h1 className="mb-6 text-center text-2xl font-bold">Sign In to Abyakto</h1>

        <div className="space-y-4">
          <Button onClick={() => signIn("github")} className="w-full" variant="outline">
            Sign in with GitHub
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a href="/sign-up" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
