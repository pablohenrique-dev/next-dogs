"use client";

import { PostStatistic } from "@/@types/global";
import { useStatistic } from "@/hooks/use-statistic";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";
import { Loading } from "../loading";

interface StatisticsProps {
  posts: PostStatistic[];
}

export default function Statistics({ posts }: StatisticsProps) {
  const { totalAccess, accessPerPost, averageAccessPerPost, postsAmount } =
    useStatistic(posts);

  const statsDisplay = [
    {
      id: 1,
      content: `Acessos: ${totalAccess}`,
    },
    {
      id: 2,
      content: `Publicações: ${postsAmount}`,
    },
    {
      id: 3,
      content: `Média de acessos: ${averageAccessPerPost}`,
    },
  ];

  if (totalAccess === null) return <Loading />;
  if (accessPerPost)
    return (
      <div className="flex animate-fade-left flex-col py-6 sm:py-12">
        <div className="flex flex-wrap gap-4">
          {statsDisplay.map((stat) => {
            return (
              <span
                className="w-full rounded border border-neutral-light p-4 text-xl font-semibold opacity-70 sm:p-6 sm:pb-7 sm:text-3xl"
                key={stat.id}
              >
                {stat.content}
              </span>
            );
          })}
        </div>

        <VictoryChart
          theme={VictoryTheme.grayscale}
          domainPadding={{ x: 50 }}
          padding={50}
          animate={{ duration: 200 }}
        >
          <VictoryAxis
            style={{
              grid: {
                stroke: "#6c6e7a89",
                strokeWidth: 0.5,
                strokeDasharray: 5,
              },
            }}
            tickFormat={accessPerPost.map((item) => item.name)}
          />
          <VictoryAxis
            style={{
              grid: {
                stroke: "#6c6e7a89",
                strokeWidth: 0.5,
                strokeDasharray: 5,
              },
            }}
            dependentAxis
          />
          <VictoryBar
            cornerRadius={4}
            barWidth={50}
            data={accessPerPost}
            x="name"
            y="access"
          />
        </VictoryChart>
      </div>
    );
}
