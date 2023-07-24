"use client";

import DefaultButton from "@/components/atoms/Button/Button";
import { IPost } from "@/models/posts.interface.model";
import React from "react";

type Props = {
  posts: IPost[];
};
export default function Posts(props: Props) {
  return (
    <div className="flex gap-3 flex-wrap justify-center items-center my-4">
      {props.posts.map((post: IPost, i: number) => {
        return (
          <div
            key={post.id}
            className="w-36 h-[250px] border flex flex-col justify-between items-center"
          >
            <p>
              {i + 1} : {post.title}
            </p>
            <DefaultButton>Test BTN</DefaultButton>
          </div>
        );
      })}
    </div>
  );
}
