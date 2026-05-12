"use client";

import { atom } from "jotai";

type StateType = {
  isPumpedUp: boolean;
};

export type NonNullableOptions<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

export const stateAtom = atom<StateType>({
  isPumpedUp: true,
});

export const isAnyOptionIsNullAtom = atom(get => {
  const negativeOptions = get(stateAtom);

  return !negativeOptions.isPumpedUp;
});

export const fileCountAtom = atom(1);
export const folderCountAtom = atom(1);

export const shouldShowUploadDropzoneAtom = atom(get => {
  const fileCount = get(fileCountAtom);
  const folderCount = get(folderCountAtom);

  return fileCount === 0 && folderCount === 0;
});
