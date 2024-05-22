import React from 'react';
import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs/promises';
import Footer from '@/app/component/footer';

// Statik olarak üretilmiş tüm id'leri alır
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public/data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return data.map(item => ({
    id: item.id.toString(),
  }));
}

const DetailPage = async ({ params }) => {
  const { id } = params;

  const filePath = path.join(process.cwd(), 'public/data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  const item = data.find(d => d.id.toString() === id);

  if (!item) {
    notFound();
  }

  return (
<div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 h-40'>
<div className="flex flex-col md:justify-end md:items-center md:border-b-2">
<div className='md:mb-5'>
<div className='text-muted flex justify-center'>{item.date}</div>
<div className="p-4">
<span className="text-4xl md:text-4xl font-bold">{item.title}</span>
</div>
</div>
</div>
<div className='md:mt-16 flex'>
    <span className='text-muted text-m md:text-lg p-4'>{item.content}</span>
</div>
</div>
  );
};
export default DetailPage;