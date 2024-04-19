"use client";

import React from "react";
import { useUser } from "@/context/user-context";
import { FormComment } from "./form/form-comment";
import { Comment } from "@/@types/global";

interface CommentsProps {
  comments: Comment[];
  photoId: number;
}

export function Comments({ comments, photoId }: CommentsProps) {
  const { user } = useUser();
  const commentContainer = React.useRef<HTMLUListElement | null>(null);

  React.useEffect(() => {
    if (commentContainer.current) {
      commentContainer.current.scrollTop =
        commentContainer.current.scrollHeight;
    }
  }, [comments]);

  return (
    <div className="mt-8 animate-fade-in overflow-hidden">
      <ul
        ref={commentContainer}
        className={`overflow-y-auto ${comments.length >= 4 && "lg:h-52"}`}
      >
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <li
                key={comment.comment_ID}
                className="mb-2 max-w-[450px] animate-fade-left break-words text-base sm:text-lg"
              >
                <strong>{comment.comment_author}: </strong>{" "}
                {comment.comment_content}
              </li>
            );
          })
        ) : (
          <p className="py-4 leading-[150%] opacity-65">
            Essa foto ainda não possui comentários 😕
          </p>
        )}
      </ul>
      {!!user && <FormComment photoId={photoId} />}
    </div>
  );
}
