import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ComponentProps<"button"> {
  isSubmitting?: boolean;
}

export function Button({ children, isSubmitting, ...props }: ButtonProps) {
  const className = twMerge(
    `mb-2 mt-2 rounded bg-primary py-4 font-bold uppercase text-primary-dark transition hover:bg-primary-medium ${isSubmitting && "cursor-not-allowed opacity-80"}`,
    props.className,
  );
  return (
    <button {...props} className={className}>
      {isSubmitting ? "Entrando" : children}
    </button>
  );
}
