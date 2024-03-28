interface ButtonProps extends React.ComponentProps<"button"> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="mb-2 mt-4 rounded bg-primary py-4 font-bold uppercase text-primary-dark transition hover:bg-primary-medium"
      {...props}
    >
      {children}
    </button>
  );
}
