import { STATS_GET } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { cookies } from "next/headers";
import { PostStatistic } from "@/@types/global";
// import { Statistics } from "@/components/profile/statistics";
import dynamic from "next/dynamic";

const Statistics = dynamic(() => import("@/components/profile/statistics"), {
  ssr: false,
});

const REVALIDATE_CACHE_TIME = 10;

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
        revalidate: REVALIDATE_CACHE_TIME,
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

  if (!data)
    return (
      <h3 className="text-lg font-semibold opacity-70 sm:text-2xl">
        Não há estatísticas para mostrar 😥
      </h3>
    );
  return <Statistics posts={data} />;
}
