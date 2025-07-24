'use client';
import Layout from '@/components/Layout'

import { useEffect, useState } from 'react';


export default function Home() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://7a0i8zt3t2.execute-api.us-east-1.amazonaws.com/visitorCounterFunction')
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error('Failed to fetch count:', err));
  }, []);

  return (
    <Layout>
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I'm Wondwossen 👋</h1>
        <p className="text-lg text-gray-600 mb-4">
          AWS Certified Solutions Architect | Full-Stack Developer | Passionate about building in the cloud ☁️
        </p>
        {count !== null ? (
          <p className="text-sm text-gray-500">👀 Visitor Count: {count}</p>
        ) : (
          <p className="text-sm text-gray-400">Loading visitor count...</p>
        )}
      </section>
    </Layout>
  );
}

