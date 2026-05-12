"use client";

import { useMutation } from "@tanstack/react-query";
import {
  deleteFilePermanentlyAction,
  moveFileToTrashAction,
  renameFileAction,
  restoreFileAction,
} from "@/actions/file-action";

export function useRenameFileMutation() {
  return useMutation({
    mutationFn: async ({ fileId, name }: { fileId: string; name: string }) => {
      return await renameFileAction({ fileId, name });
    },
  });
}

export function useDeleteFilePermanentlyMutation() {
  return useMutation({
    mutationFn: async ({ fileId }: { fileId: string }) => {
      return await deleteFilePermanentlyAction({ fileId });
    },
  });
}

export function useMoveFileToTrashMutation() {
  return useMutation({
    mutationFn: async ({ fileId }: { fileId: string }) => {
      return await moveFileToTrashAction({ fileId });
    },
  });
}

export function useRestoreFileMutation() {
  return useMutation({
    mutationFn: async ({ fileId }: { fileId: string }) => {
      return await restoreFileAction({ fileId });
    },
  });
}
