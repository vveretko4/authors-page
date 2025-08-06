"use client";
/*
 * Documentation:
 * Pie Chart — https://app.subframe.com/79a64d4ff271/library?component=Pie+Chart_0654ccc7-054c-4f3a-8e9a-b7c81dd3963c
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";

interface PieChartRootProps
  extends React.ComponentProps<typeof SubframeCore.PieChart> {
  className?: string;
}

const PieChartRoot = React.forwardRef<
  React.ElementRef<typeof SubframeCore.PieChart>,
  PieChartRootProps
>(function PieChartRoot({ className, ...otherProps }: PieChartRootProps, ref) {
  return (
    <SubframeCore.PieChart
      className={SubframeUtils.twClassNames("h-52 w-52", className)}
      ref={ref}
      colors={[
        "#06b6d4",
        "#a5f3fc",
        "#0891b2",
        "#67e8f9",
        "#0e7490",
        "#22d3ee",
      ]}
      {...otherProps}
    />
  );
});

export const PieChart = PieChartRoot;
