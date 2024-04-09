"use client";

import React from "react";
import { Comment } from "@/app/photo/[id]/page";
import { userContext } from "@/context/user-context";
import { FormComment } from "./form/form-comment";

interface CommentsProps {
  comments: Comment[];
  photoId: number;
}

export function Comments({ comments, photoId }: CommentsProps) {
  const { user } = React.useContext(userContext);
  return (
    <div className="mt-8 animate-fade-in">
      <ul>
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <li
                key={comment.comment_ID}
                className="mb-2 animate-fade-left text-base sm:text-lg"
              >
                <strong>{comment.comment_author}: </strong>{" "}
                {comment.comment_content}
              </li>
            );
          })
        ) : (
          <p className="py-4 opacity-65">
            Essa foto ainda não possui comentários 😕
          </p>
        )}
      </ul>
      {!!user && <FormComment photoId={photoId} />}
    </div>
  );
}
