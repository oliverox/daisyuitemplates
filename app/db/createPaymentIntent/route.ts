import { NextRequest, NextResponse } from 'next/server';
import firebaseApp from '../../lib/firebase/config';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

/*
 * Create new user account
 */

export async function POST(request: NextRequest) {
  let secret = request.headers.get('app-secret');
  let { paymentIntent } = await request.json();
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
    console.log('Inside save payment intent...');
    await addDoc(collection(db, 'payments'), paymentIntent);
    return NextResponse.json({
      ok: true,
    });
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
