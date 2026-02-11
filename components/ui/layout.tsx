import React from "react";
import { cn } from "@/lib/utils";

interface StackProps {
  children: React.ReactNode;
  gap?: number;
  className?: string;
}

export const VStack = ({ children, gap = 4, className, align = "stretch" }: StackProps & { align?: "start" | "center" | "end" | "stretch" }) => {
  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  }[align];

  return (
    <div className={cn("flex flex-col", `gap-${gap}`, alignClass, className)}>
      {children}
    </div>
  );
};

export const HStack = ({ children, gap = 4, className, justify = "start" }: StackProps & { justify?: "start" | "center" | "end" | "between" }) => {
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  }[justify];

  return (
    <div className={cn("flex flex-row items-center", `gap-${gap}`, justifyClass, className)}>
      {children}
    </div>
  );
};

export const Grid = ({ children, cols = 2, gap = 4, className }: StackProps & { cols?: number }) => {
  const colsClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }[cols];

  return (
    <div className={cn("grid", colsClass, `gap-${gap}`, className)}>
      {children}
    </div>
  );
};