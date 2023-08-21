import type { ReactNode } from 'react';
import Link from 'next/link';

function Product(props: { children: ReactNode }) {
  return <div className="flex flex-col my-6">{props.children}</div>;
}

function TemplateImage() {
  return (
    <div className="min-w-[200px] min-h-[300px] bg-white rounded-md mb-4 drop-shadow-md"></div>
  );
}

export default function MyProducts() {
  return (
    <div className="min-h-screen">
      <main className="p-10">
        <h1 className="text-2xl font-semibold mb-4">My Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Product>
            <Link href="/product/tech-startup">
              <TemplateImage />
              <div className="flex flex-row justify-between">
                <span className="text-lg font-semibold">Tech startup</span>
                <div className="btn btn-xs btn-secondary">Download</div>
              </div>
            </Link>
            <span>A minimalist agency template</span>
          </Product>
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">Blog</span>
              <div className="btn btn-xs btn-secondary">Download</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">CV / Résumé</span>
              <div className="btn btn-xs btn-secondary">Download</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
        </div>
      </main>
    </div>
  );
}
