import { Product } from "@/types";
import Item from "./item";

interface Props {
  products: Product[];
}

const images = [
  "https://www.cordobadigital.net/wp-content/uploads/2021/01/iphone-12-128gb.png",
  "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png",
  "https://www.macstation.com.ar/web/image/product.image/525/image_1024/AirPods%20Pro%20%282nd%20generation%29?unique=edd59f1",
  "https://carrello.com.ar/ecom/wp-content/uploads/2023/10/pink-ASD.png",
  "https://sony.scene7.com/is/image/sonyglobalsolutions/Primary_image-17?$S7Product$&fmt=png-alpha",
  "https://images.samsung.com/is/image/samsung/p6pim/ar/un43t5300agczb/gallery/ar-fhd-t5300-un43t5300agczb-356627272?$650_519_PNG$",
  "https://www.macstation.com.ar/web/image/product.template/86671/image_1024?unique=fb64e6e",
  "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$",
  "https://images.samsung.com/is/image/samsung/ph-ref-rs5000-familyhub-rs64t5f01b4-tc-frontblack-244067168?$650_519_PNG$",
];

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4 my-16">
      {products.map((product, i) => (
        <Item
          {...{ ...product, image: images[i] || product.image }}
          key={`product-${i}`}
        />
      ))}
    </div>
  );
};

export default ProductList;
