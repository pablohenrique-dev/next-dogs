"use client";

import React from "react";
import { PostStatistic } from "@/@types/global";

export function useStatistic(postStats: PostStatistic[]) {
  const [totalAccess, setTotalAccess] = React.useState<null | number>(null);
  const [accessPerPost, setAccessPerPost] = React.useState<
    null | { name: string; access: number }[]
  >(null);

  React.useEffect(() => {
    const totalAccess =
      postStats.length > 0
        ? postStats.reduce((acc, post) => {
            return acc + Number(post.acessos);
          }, 0)
        : 0;

    const accessPerPost =
      postStats.length > 0
        ? postStats.reduce(
            (acc, post) => {
              const postAccess = Number(post.acessos);

              const index = acc.findIndex((item) => item.name === post.title);
              if (index !== -1) {
                acc[index].access += postAccess;
              } else {
                acc.push({ name: post.title, access: postAccess });
              }

              return acc;
            },
            [] as { name: string; access: number }[],
          )
        : null;

    setTotalAccess(totalAccess);
    setAccessPerPost(accessPerPost);
  }, [postStats]);

  return {
    totalAccess,
    accessPerPost,
    postsAmount: postStats.length,
    averageAccessPerPost: totalAccess
      ? (totalAccess / postStats.length).toFixed(1)
      : 0,
  };
}
