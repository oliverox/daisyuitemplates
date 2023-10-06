'use client';

import dynamic from 'next/dynamic';

const P1 = dynamic(() => import('../../pdt/jxE4hPZlj1nigSSBXyf1.mdx'), {
  loading: () => <p>Loading...</p>,
});

const P2 = dynamic(() => import('../../pdt/qKMWEewo4YU7swJOrWAD.mdx'), {
  loading: () => <p>Loading...</p>,
});


export default function Content({ id }: { id: string }) {
  console.log('content id=', id);
  switch (id) {
    case 'jxE4hPZlj1nigSSBXyf1':
      return <P1 />;

    case 'qKMWEewo4YU7swJOrWAD':
      return <P2 />;

    default:
      break;
  }
}
