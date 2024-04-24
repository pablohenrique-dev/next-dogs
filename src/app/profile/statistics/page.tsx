import { STATS_GET } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { cookies } from "next/headers";
import { PostStatistic } from "@/@types/global";
// import { Statistics } from "@/components/profile/statistics";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Fallback } from "@/components/fallback";
import { Metadata } from "next";

const Statistics = dynamic(() => import("@/components/profile/statistics"), {
  ssr: false,
});

const REVALIDATE_TIME_IN_SECONDS = 10;

async function getStatistics() {
  const token = cookies().get("token")?.value;
  try {
    if (!token) {
      throw new Error("Faça login novamente");
    }

    const { url, headers, method } = STATS_GET(token);
    const response = await fetch(url, {
      method,
      headers,
      next: {
        tags: ["stats"],
        revalidate: REVALIDATE_TIME_IN_SECONDS,
      },
    });

    if (!response.ok) {
      throw new Error("Não foi possível buscar as estatísticas.");
    }

    const data = (await response.json()) as PostStatistic[];

    return { ok: true, data, error: null };
  } catch (error) {
    return handleApiError(error);
  }
}

export default async function StatisticsPage() {
  const { data } = await getStatistics();

  if (!data || data.length === 0)
    return (
      <Fallback
        message="Não há estatísticas para mostrar 😥"
        redirectUrl="/profile/new-post"
        linkText="Criar post"
      />
    );
  return <Statistics posts={data} />;
}

export const metadata: Metadata = {
  title: "Estatísticas",
  description: "Veja as estatísticas dos seus posts.",
};
