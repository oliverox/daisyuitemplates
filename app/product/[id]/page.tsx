import Link from 'next/link';
import type { Product } from '../../lib/types';
import { getProduct } from '../../utils/getProduct';
import Content from './content';

export default async function Product(props: { params: { id: string } }) {
  console.log('id=', props.params.id);
  const product: Product = await getProduct({ id: props.params.id });
  return (
    <div className="min-h-screen">
      <main className="flex flex-col gap-4 p-10">
        <span className="text-2xl font-semibold capitalize">
          {product.name}
        </span>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="min-w-[300px] min-h-[500px] w-full max-w-7xl h-full bg-white rounded-md drop-shadow-md">
            <div className="flex flex-row gap-8 items-center justify-between">
              <span className="btn btn-secondary btn-xl">
                Buy for ${product.price}
              </span>
              <Link
                href={product.demoUrl}
                target="_blank"
                className="btn btn-ghost flex items-center gap-1"
              >
                <span>Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="max-w-3xl">
            <Content id={props.params.id} />
          </div>
        </div>
      </main>
    </div>
  );
}
