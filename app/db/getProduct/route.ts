import { NextRequest, NextResponse } from 'next/server';
import firebaseApp from '../../lib/firebase/config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import type { Product } from '../../lib/types';

const db = getFirestore(firebaseApp);

/*
 * Get product by product ID
 */

export async function POST(request: NextRequest) {
  let secret = request.headers.get('app-secret');
  let { id } = await request.json();
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
  if (!id || id.length === 0) {
    return NextResponse.json(
      {
        message: 'Invalid product.',
      },
      {
        status: 400,
      }
    );
  }
  let result = {};
  try {
    const productSnap = await getDoc(doc(db, 'products', id));
    if (productSnap.exists()) {
      result = productSnap.data() as Product;
    } else {
      throw new Error('Invalid product.');
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

  return NextResponse.json({ ...result });
}
