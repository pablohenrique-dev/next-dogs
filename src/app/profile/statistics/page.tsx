import { STATS_GET } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { cookies } from "next/headers";
import { PostStatistic } from "@/@types/global";
// import { Statistics } from "@/components/profile/statistics";
import dynamic from "next/dynamic";
import Link from "next/link";

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
      <div className="mt-8 flex animate-fade-left flex-col gap-6">
        <h3 className="font-body text-lg">
          Não há estatísticas para mostrar 😥
        </h3>
        <Link
          href="/profile/new-post"
          className="inline-block w-fit rounded bg-primary px-6 py-4 font-bold uppercase text-primary-dark"
        >
          Criar post
        </Link>
      </div>
    );
  return <Statistics posts={data} />;
}
