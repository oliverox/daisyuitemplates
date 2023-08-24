import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

/*
 * Get all products and user purchases if user is signed in
 */

export async function getAllProducts() {
  const session = await getServerSession(authOptions);

  let getAllProducts = fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/db/getAllProducts`,
    {
      method: 'POST',
      headers: {
        'app-secret': process.env.NEXTAUTH_SECRET
          ? process.env.NEXTAUTH_SECRET
          : Math.random().toString(),
      },
    }
  );

  let getAccount = session?.user?.email
    ? fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/db/getAccount?userId=${session.user.email}`,
        {
          method: 'POST',
          headers: {
            'app-secret': process.env.NEXTAUTH_SECRET
              ? process.env.NEXTAUTH_SECRET
              : Math.random().toString(),
          },
        }
      )
    : null;

  let result = await Promise.all([getAllProducts, getAccount]);
  let products = await result[0].json();
  let account = result[1] ? await result[1]?.json() : [];

  return {
    products,
    purchases: account.purchases,
  };
}