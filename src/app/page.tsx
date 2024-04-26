import { Feed } from "@/components/feed/feed";

export default function HomePage() {
  return (
    <section className="container">
      <Feed username={null} queryKey="feedHome" />
    </section>
  );
}
