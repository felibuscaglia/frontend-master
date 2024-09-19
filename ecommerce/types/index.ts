import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Product = {
  product_id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};
