import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let event = await request.json();
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Will save paymentIntent to db...');
      await fetch(`${process.env.BASE_URL}/db/createPaymentIntent`, {
        method: 'POST',
        headers: {
          'app-secret': process.env.NEXTAUTH_SECRET
            ? process.env.NEXTAUTH_SECRET
            : 'boom',
        },
        body: JSON.stringify({
          paymentIntent,
        }),
      });
      console.log('paymentIntent=', paymentIntent);
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      break;

    default:
      break;
  }
  return NextResponse.json({});
}
