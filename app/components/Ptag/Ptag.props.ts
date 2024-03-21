import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "p14" | "p16" | "p18";
  children: ReactNode;
}
