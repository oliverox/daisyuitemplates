import { authOptions } from '@/app/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params: { productId } }: { params: { productId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json(
      {
        message: 'Unauthorized access.',
      },
      {
        status: 401,
      }
    );
  }
  if (!productId || productId.length === 0) {
    return NextResponse.json(
      {
        message: 'Invalid product.',
      },
      {
        status: 400,
      }
    );
  }

  let products = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/db/getProduct`,
    {
      method: 'POST',
      headers: {
        'app-secret': process.env.NEXTAUTH_SECRET
          ? process.env.NEXTAUTH_SECRET
          : 'boom',
      },
      body: JSON.stringify({
        productId,
      }),
    }
  );
  return NextResponse.json(await products.json());
}
