"use client";

import { useMutation } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";

export function useSignOutMutation() {
  return useMutation({
    mutationFn: async () => {
      await authClient.signOut();
    },
  });
}

export function useSignInWithGoogleMutation() {
  return useMutation({
    mutationFn: async ({ callbackURL }: { callbackURL: string }) => {
      await authClient.signIn.social({ provider: "google", callbackURL });
    },
  });
}

export function useSignInWithGithubMutation() {
  return useMutation({
    mutationFn: async ({ callbackURL }: { callbackURL: string }) => {
      await authClient.signIn.social({ provider: "github", callbackURL });
    },
  });
}
