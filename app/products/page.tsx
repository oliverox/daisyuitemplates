import type { ReactNode } from 'react';

function Product(props: { children: ReactNode }) {
  return <div className="flex flex-col my-6">{props.children}</div>;
}

function TemplateImage() {
  return (
    <div className="min-w-[200px] min-h-[300px] bg-white rounded-md mb-4 drop-shadow-md"></div>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen">
      <main className="p-10">
        <h1 className="text-2xl font-semibold mb-4">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">Tech startup</span>
              <div className="badge badge-neutral">$25</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">Blog</span>
              <div className="badge badge-neutral">$25</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">CV / Résumé</span>
              <div className="badge badge-neutral">$25</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">Marketing studio</span>
              <div className="badge badge-neutral">$25</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">Native app</span>
              <div className="badge badge-neutral">$25</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">Dashboard</span>
              <div className="badge badge-neutral">$25</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">Education</span>
              <div className="badge badge-neutral">$25</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">Crypto</span>
              <div className="badge badge-neutral">$25</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
          <Product>
            <TemplateImage />
            <div className="flex flex-row justify-between">
              <span className="text-lg font-semibold">eCommerce</span>
              <div className="badge badge-neutral">$25</div>
            </div>
            <span>A minimalist agency template</span>
          </Product>
        </div>
      </main>
    </div>
  );
}
