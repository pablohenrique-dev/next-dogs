"use client";

import React from "react";
import { Close } from "./icon/Close";

interface ToastProps extends React.PropsWithChildren {
  closeToast: () => void;
}

export function Toast({ children, closeToast }: ToastProps) {
  return (
    <span className="absolute right-4 top-11 m-2 flex animate-fade-in items-center justify-between gap-4 rounded border-l-[6px] border-red-600 bg-red-50 px-5 py-3 text-sm font-medium shadow-lg sm:text-base">
      {children}
      <button onClick={closeToast} className="mt-[2px]">
        <Close color="black" />
      </button>
    </span>
  );
}
