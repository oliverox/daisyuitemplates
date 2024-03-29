import { NextRequest, NextResponse } from 'next/server';
import firebaseApp from '../../lib/firebase/config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

/*
 * Retrieve user account
 */

export async function POST(request: NextRequest) {
  let userId = request.nextUrl.searchParams.get('userId');
  let secret = request.headers.get('app-secret');

  if (!userId || userId.length === 0) {
    return NextResponse.json(
      {
        message: 'Unauthorized user access.',
      },
      {
        status: 401,
      }
    );
  }

  if (secret !== process.env.NEXTAUTH_SECRET) {
    return NextResponse.json(
      {
        message: 'Unauthorized access.',
      },
      {
        status: 401,
      }
    );
  }

  try {
    const user = await getDoc(doc(db, 'accounts', userId));
    if (user.exists()) {
      return NextResponse.json({ ...user.data(), newUser: false });
    } else {
      return NextResponse.json({ newUser: true });
    }
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: 400,
      }
    );
  }
}
