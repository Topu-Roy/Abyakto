"use client";

import { useMutation } from "@tanstack/react-query";
import {
  createFolderAction,
  deleteFolderPermanentlyAction,
  moveFolderToTrashAction,
  renameFolderAction,
  restoreFolderAction,
} from "@/actions/folder-action";

export function useCreateFolderMutation() {
  return useMutation({
    mutationFn: async ({ name, parentFolderId }: { name: string; parentFolderId: string | null }) => {
      return await createFolderAction({ name, parentFolderId });
    },
  });
}

export function useDeleteFolderPermanentlyMutation() {
  return useMutation({
    mutationFn: async ({ folderId }: { folderId: string }) => {
      return await deleteFolderPermanentlyAction({ folderId });
    },
  });
}

export function useRenameFolderMutation() {
  return useMutation({
    mutationFn: async ({ folderId, name }: { folderId: string; name: string }) => {
      return await renameFolderAction({ folderId, name });
    },
  });
}

export function useMoveFolderToTrashMutation() {
  return useMutation({
    mutationFn: async ({ folderId }: { folderId: string }) => {
      return await moveFolderToTrashAction({ folderId });
    },
  });
}

export function useRestoreFolderMutation() {
  return useMutation({
    mutationFn: async ({ folderId }: { folderId: string }) => {
      return await restoreFolderAction({ folderId });
    },
  });
}
