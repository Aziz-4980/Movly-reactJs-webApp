import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Posts = () => {
  const { year, month } = useParams();
  const searchParams = useSearchParams();

  console.log(searchParams[0].get("sortBy"));
  return (
    <div>
      <h1>Posts</h1>
      Year: {year} , Month: {month}
    </div>
  );
};

export default Posts;
