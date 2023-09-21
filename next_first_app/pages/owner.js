import React from 'react';

// This will listen on localhost:3000/khateeb
// This is called as the file based routing
export default function owner() {
  return (
    <div className='flex items-center justify-center h-screen text-xl'>Owner of this repository is - <p className='ml-2 text-3xl font-semibold'>Md Khateebur Rab</p></div>
  )
}
