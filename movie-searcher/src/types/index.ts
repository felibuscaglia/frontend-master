import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ApiResponse = {
  Response: "True" | "False";
  Search?: Movie[];
  totalResults?: string;
  Error?: string;
};

export type Movie = {
  Poster?: string;
  Title: string;
  Year: string;
};
