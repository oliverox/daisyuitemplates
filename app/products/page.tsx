import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../types';
import { getAllProducts } from '../utils/getAllProducts';

function ProductItem(props: { children: ReactNode }) {
  return <div className="flex flex-col my-6">{props.children}</div>;
}

function TemplateImage({ url }: { url: string }) {
  return (
    <div className="min-w-[200px] min-h-[250px] bg-white rounded-md mb-4 drop-shadow-md">
      <Image layout="fill" objectFit="contain" src={url} alt="Template image" />
    </div>
  );
}

export default async function Products() {
  let { products = [], purchases = {} } = await getAllProducts();
  let purchasedPdts = products.filter((p: Product) => purchases[p.id] === true);
  let unpurchasedPdts = products.filter((p: Product) => !purchases[p.id]);
  return (
    <div className="min-h-screen">
      <main className="p-10">
        {purchasedPdts.length > 0 && (
          <section className="mb-4 p-3">
            <h1 className="text-2xl font-semibold">Your purchases</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {purchasedPdts.map((p: Product, key: number) => {
                return (
                  <ProductItem key={key}>
                    <Link href={p.staticPage}>
                      <TemplateImage url={p.image} />
                      <div className="flex flex-row justify-between items-center">
                        <span className="text-lg font-semibold">{p.name}</span>
                        <span className="btn btn-neutral btn-xs">Download</span>
                      </div>
                    </Link>
                    <span>{p.description}</span>
                  </ProductItem>
                );
              })}
            </div>
          </section>
        )}

        {unpurchasedPdts.length > 0 && (
          <section className="p-3">
            <h1 className="text-2xl font-semibold">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {unpurchasedPdts.map((product: Product, key: number) => {
                return (
                  <ProductItem key={key}>
                    <Link href={product.staticPage}>
                      <TemplateImage url={product.image} />
                      <div className="flex flex-row justify-between items-center">
                        <span className="text-lg font-semibold">
                          {product.name}
                        </span>
                        <span className="badge badge-secondary">
                          $ {product.price}
                        </span>
                      </div>
                    </Link>
                    <span>{product.description}</span>
                  </ProductItem>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
