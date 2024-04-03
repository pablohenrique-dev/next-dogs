"use client";

import React from "react";
import { Close } from "./icon/close";

export interface ToastState {
  message: string;
  status: "error" | "success";
}

interface ToastProps extends ToastState {
  closeToast: () => void;
}

export function Toast({ closeToast, message, status }: ToastProps) {
  return (
    <span
      className={`absolute right-4 top-11 m-2 flex animate-fade-in items-center justify-between gap-4 rounded border-l-[6px]  px-5 py-3 text-sm font-medium shadow-lg sm:text-base ${status === "error" ? "border-red-600 bg-red-50" : "border-green-600 bg-green-50"}`}
    >
      {message}
      <button onClick={closeToast} className="mt-[2px]">
        <Close color="black" />
      </button>
    </span>
  );
}
