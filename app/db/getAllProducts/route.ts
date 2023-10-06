import { NextRequest, NextResponse } from 'next/server';
import firebaseApp from '../../lib/firebase/config';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import type { Product } from '../../lib/types';

const db = getFirestore(firebaseApp);

/*
 * Query Firebase for all products
 */

export async function POST(request: NextRequest) {
  let secret = request.headers.get('app-secret');

  // Make sure the call is coming from the app client
  if (secret !== process.env.NEXTAUTH_SECRET) {
    return NextResponse.json(
      {
        message: 'Unauthorized access!',
      },
      {
        status: 401,
      }
    );
  }
  let result: Product[] = [];
  try {
    const q = query(collection(db, 'products'), where('enabled', '==', true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = { id: doc.id, ...doc.data() } as Product;
      result.push(data);
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

  return NextResponse.json(result);
}
