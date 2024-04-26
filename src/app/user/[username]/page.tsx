import { Fallback } from "@/components/fallback";
import { Feed } from "@/components/feed/feed";
import { HeadingDetail } from "@/components/heading-detail";
import { Metadata } from "next";

interface UserPageParams {
  params: { username: string };
}

export default async function UserPage({ params }: UserPageParams) {
  return (
    <section className="container">
      <h1 className="relative my-8 animate-fade-left font-heading text-3xl sm:text-5xl">
        {params.username}
        <HeadingDetail />
      </h1>
      <Feed
        queryKey="feedUser"
        username={params.username}
        fallback={
          <Fallback
            message={`${params.username} ainda não possui nenhum post.`}
            redirectUrl="/"
            linkText="Voltar ao início"
          />
        }
      />
    </section>
  );
}

export function generateMetadata({ params }: UserPageParams): Metadata {
  return {
    title: params.username,
    description: `Posts do usuário ${params.username}`,
  };
}
