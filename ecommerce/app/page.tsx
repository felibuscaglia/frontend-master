import { subtitle, title } from "@/components/primitives";
import ProductList from "@/components/product-list";
import { Suspense } from "react";

export default async function Home() {
  const data = await fetch(
    "https://fake-store-api.mock.beeceptor.com/api/products"
  );
  const products = await data.json();

  return (
    <section>
      <h2 className={title({ size: "lg" })}>Get Inspired</h2>
      <p className={subtitle()}>
        Browsing for your next long-haul trip, everyday journey, or just fancy a
        look at what's <br /> new? From community favourites to
        about-to-sell-out items, see them all here.
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList products={products} />
      </Suspense>
    </section>
  );
}
