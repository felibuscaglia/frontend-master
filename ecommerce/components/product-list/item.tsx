import { Product } from "@/types";
import Image from "next/image";
import { Button } from "@nextui-org/button";

const ProductListItem: React.FC<Product> = ({
  name,
  image,
  description,
  price,
  product_id,
}) => {
  return (
    <div>
      <section className="bg-white rounded h-64 w-full flex items-center justify-center overflow-hidden group">
        <div className="w-3/4 h-3/4 relative transform transition-transform duration-300 ease-in-out group-hover:scale-110">
          <Image
            src={image}
            alt={`${name} image`}
            fill
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </section>
      <section className="my-4">
        <p className="font-semibold text-sm">{name}</p>
        <p className="font-light text-xs truncate">{description}</p>
      </section>
      <section className="flex items-center justify-between">
        <span className="font-medium text-sm">${price}</span>
        <Button size="sm">Add to Cart</Button>
      </section>
    </div>
  );
};

export default ProductListItem;
