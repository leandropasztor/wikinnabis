'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles([
      { title: 'O que é Cannabis?', slug: 'o-que-e-cannabis', category: 'Geral' },
      { title: 'THC vs CBD', slug: 'thc-vs-cbd', category: 'Canabinoides' },
    ]);
  }, []);

  return (
    <main style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Wikinnabis 🌿</h1>
      <p>A enciclopédia aberta e inteligente sobre o universo da cannabis</p>
      <ul>
        {articles.map((a) => (
          <li key={a.slug}>
            <a href={'/artigos/' + a.slug}>{a.title}</a> [{a.category}]
          </li>
        ))}
      </ul>
    </main>
  );
}
