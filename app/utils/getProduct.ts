import type { Product } from '../lib/types';

/*
 * Get all products and user purchased products if user is signed in
 */

export async function getProduct({ id }: { id: string }) {
  let result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/db/getProduct`,
    {
      method: 'POST',
      headers: {
        'app-secret': process.env.NEXTAUTH_SECRET
          ? process.env.NEXTAUTH_SECRET
          : Math.random().toString(),
      },
      body: JSON.stringify({
        id,
      }),
    }
  );

  let product: Product = await result.json();

  return { ...product };
}
