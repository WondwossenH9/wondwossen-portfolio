'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('https://your-api-id.execute-api.region.amazonaws.com/prod/visitor-count');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchCount();
  }, []);

  return (
    <p className="text-sm text-gray-500">
      {count !== null ? `This resume has been viewed ${count} times.` : 'Loading visitor count...'}
    </p>
  );
}
