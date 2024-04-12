"use client";

import React from "react";
import { Portrait } from "../icon/portrait";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  imgPreview: string | null;
}

export const InputImage = React.forwardRef<HTMLInputElement, Props>(
  function Input(
    { name, error, label, required, className, imgPreview, ...rest },
    ref,
  ) {
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={name}
          style={{
            backgroundImage: imgPreview ? `url("${imgPreview}")` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`flex aspect-square h-auto w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded border border-dashed sm:aspect-auto sm:h-full ${error ? "border-red-600" : "border-neutral-light"}`}
        >
          {!imgPreview && (
            <span
              className={`flex flex-col items-center justify-center gap-2 opacity-65 ${!!error && "text-red-600"}`}
            >
              <Portrait color="black" size="big" />
              Escolha uma imagem
            </span>
          )}
        </label>

        <input
          ref={ref}
          id={name}
          name={name}
          type="file"
          {...rest}
          className="sr-only"
        />

        {error && (
          <span className="animate-fade-left text-sm text-red-600">
            {error}
          </span>
        )}
      </div>
    );
  },
);
