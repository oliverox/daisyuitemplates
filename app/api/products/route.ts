import { authOptions } from '@/app/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json(
      {
        message: 'Unauthorized access!',
      },
      {
        status: 401,
      }
    );
  }

  let products = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/db/getAllProducts`,
    {
      method: 'POST',
      headers: {
        'app-secret': process.env.NEXTAUTH_SECRET
          ? process.env.NEXTAUTH_SECRET
          : 'boom',
      },
    }
  );
  return NextResponse.json(await products.json());
}
