"use client";

import React from "react";

interface FormContainerProps extends React.ComponentProps<"form"> {}

export function FormContainer({ children, ...props }: FormContainerProps) {
  return (
    <form className="flex w-fit flex-col gap-6 md:w-[400px]" {...props}>
      {children}
    </form>
  );
}
