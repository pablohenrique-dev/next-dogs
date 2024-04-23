import Link from "next/link";

interface FallbackProps {
  message: string;
  redirectUrl: string;
  linkText: string;
}

export function Fallback({ message, redirectUrl, linkText }: FallbackProps) {
  return (
    <div className="animate-fade-left">
      <h3 className="mb-6 mt-8 font-body text-lg">{message}</h3>
      <Link
        href={redirectUrl}
        className="inline-block w-fit rounded bg-primary px-6 py-4 font-bold uppercase text-primary-dark"
      >
        {linkText}
      </Link>
    </div>
  );
}
