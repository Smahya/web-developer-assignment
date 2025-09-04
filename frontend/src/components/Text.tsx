import React from "react";

import { cn } from "@/lib/utils";

type AllowedElements = Extract<
  keyof React.JSX.IntrinsicElements,
  "p" | "span" | "h2" | "div"
>;

export type TypographyVariant = "h2" | "h3" | "p" | "h6";
type className = React.HTMLAttributes<HTMLElement>["className"];

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: AllowedElements;
  className?: string;
  variant?: TypographyVariant;
}

export const Text: React.FC<TextProps> = ({
  children,
  as: Component = "p",
  className,
  variant = "p",
  ...props
}) => {
  const typographyClasses = typography[variant];

  return (
    <Component className={cn(typographyClasses, className)} {...props}>
      {children}
    </Component>
  );
};

export const typography: Record<TypographyVariant, className> = {
  h2: "font-medium text-6xl leading-[120%]  text-gray-900", // Display xl
  h3: "font-medium text-4xl leading-[120%]  text-gray-900", // Display lg
  h6: "font-medium text-xl leading-[120%]  text-gray-900", // Display md
  p: "font-normal text-sm leading-[120%]  text-gray-600", // Text Preset 4
} as const;
