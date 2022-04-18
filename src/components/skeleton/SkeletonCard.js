import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const SkeletonCard = ({ width, height, count, style, circle = false }) => {
  return (
    <SkeletonTheme color="#343a40" highlightColor="#3c4147">
      <Skeleton
        width={width}
        height={height}
        count={count}
        circle={circle}
        style={style}
      />
    </SkeletonTheme>
  );
};

export default SkeletonCard;
