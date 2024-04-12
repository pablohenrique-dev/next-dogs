import { ProfileHeader } from "@/components/profile/header";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="container min-h-screen py-8">
      <ProfileHeader />
      {children}
    </section>
  );
}
