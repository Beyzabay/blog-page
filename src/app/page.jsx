"use client"
import React, { useState, useEffect } from "react";
import './globals.css';
import Link from "next/link";
import Latest from './component/Latest'

const Page = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  // Gösterilecek veriler hesaplanır
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <>
      <title>Blog</title>
      <Latest/>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col justify-between border-b-2">
        {currentItems.map((item, index) => (
          <div key={index} className="pt-8 flex flex-row border-t">
            <div className="w-1/4 text-muted">{item.date}</div>
            <div className="w-3/4">
              <div className="text-xl font-semibold">
                <a href={`./post-detail/${item.id}`}>
                {item.title}</a></div>
              <div className="mt-4">{item.content.slice(0, 100)}</div>
              <div className="bg-transparent my-10">
                <Link href={`./post-detail/${item.id}`} className="text-red-500">Read more →</Link>
              </div>
              </div>
          </div>
        ))}
        <div className="flex justify-between mb-40 ">
          <button 
            onClick={handlePreviousPage} 
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 text-black"
          >
            Previous
          </button>
          <button 
            onClick={handleNextPage} 
            disabled={endIndex >= data.length}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 text-black"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;