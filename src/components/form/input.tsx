"use client";

import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  { name, error, label, required, className, ...rest },
  ref,
) {
  return (
    <fieldset className={`flex flex-col gap-2 ${className ? className : ""}`}>
      <label
        htmlFor={name}
        className="cursor-pointer font-body text-base font-medium text-neutral"
      >
        {label}
        {required ? <span className="text-red-600"> *</span> : ""}
      </label>

      <input
        ref={ref}
        id={name}
        name={name}
        {...rest}
        className="flex items-center justify-between rounded border border-neutral-light px-5 py-3 text-neutral outline-0 transition-all focus:border-primary"
      />

      {error && (
        <span className="animate-fade-left text-sm text-red-600">{error}</span>
      )}
    </fieldset>
  );
});
