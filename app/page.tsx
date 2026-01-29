// app/test-page/page.tsx
'use client';
import Link, { useNavigationContext } from 'next-progressbar-link';
import { useEffect } from 'react';

export default function TestPage() {
  const { isNavigating, setIsNavigating } = useNavigationContext();
  useEffect(() => {
    console.log('Link component:', Link);
  }, []);

  return (
    <div className="p-8">
      {isNavigating ? 'YES' : 'NO'}
      <Link
        href="/"
        onClick={() => {
          setIsNavigating(true);
        }}
      >
        <button className="bg-blue-500 text-white p-4">Test Link</button>
      </Link>
    </div>
  );
}
