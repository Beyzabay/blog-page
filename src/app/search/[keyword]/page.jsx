"use client"
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const keyword = params.keyword;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data.json');
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const result = await res.json();

        // Keyword ile ilgili veriyi bulup state'e set ediyoruz
        const keywordData = result[keyword];
        setData(keywordData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div>
      {data ? (
        <div>
          {/* Veriyi kullanarak içerik oluşturun */}
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
