"use client";

import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

export const InputPassword = React.forwardRef<HTMLInputElement, Props>(
  function InputPassword(
    { name, error, label, required, className, ...rest },
    ref,
  ) {
    const [isTypePassword, setIsTypePassword] = React.useState(true);

    return (
      <fieldset className={`flex flex-col gap-2 ${className ? className : ""}`}>
        <label
          htmlFor={name}
          className="cursor-pointer font-body text-base font-medium text-neutral"
        >
          {label}
          {required ? <span className="text-red-600"> *</span> : ""}
        </label>
        <div className="flex items-center justify-between gap-4 rounded border border-neutral-light text-neutral outline-0 transition-all focus-within:border-primary">
          <input
            ref={ref}
            id={name}
            name={name}
            type={isTypePassword ? "password" : "text"}
            {...rest}
            className="w-full rounded px-5  py-3 outline-0"
          />
          <span
            onClick={() => setIsTypePassword((state) => !state)}
            className="cursor-pointer border-l border-neutral-light pl-4 pr-5 text-xs font-bold uppercase tracking-wider text-neutral-light hover:border-primary"
          >
            {isTypePassword ? "MOSTRAR" : "ESCONDER"}
          </span>
        </div>
        {error && (
          <span className="animate-fade-left text-sm text-red-600">
            {error}
          </span>
        )}
      </fieldset>
    );
  },
);
