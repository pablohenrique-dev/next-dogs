export default function AccountLayour({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex justify-center">
      {children}
      <div
        className="hidden h-screen w-screen animate-fade-in bg-cover bg-center md:block"
        style={{
          backgroundImage: "url(/images/login-dog-img.jpg)",
        }}
      ></div>
    </section>
  );
}
