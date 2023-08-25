import { NextRequest, NextResponse } from 'next/server';
import firebaseApp from '../../lib/firebase/config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

/*
 * Create new user account
 */

export async function POST(request: NextRequest) {
  let userId = request.nextUrl.searchParams.get('userId');
  let name = request.nextUrl.searchParams.get('name');
  let secret = request.headers.get('app-secret');

  console.log('creating new user account:', userId, name);

  if (!userId || userId.length === 0 || !name || name.length === 0) {
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
    let userData = {
      name,
      purchases: {},
    };
    console.log('new userData:', userData);
    await setDoc(doc(db, 'accounts', userId.toLowerCase()), userData);
    return NextResponse.json(userData);
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
