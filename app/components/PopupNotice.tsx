'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PopupNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-[90%] relative animate-fadeIn text-[#1a1a1a]">
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/rice-bowl.jpg" 
            alt="Bowl of rice"
            width={150}
            height={150}
            className="rounded-full shadow-md mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold mb-2">Notice</h2>
          <ul className="text-base mb-4 space-y-1">
            <li><strong>Small rice:</strong> $3.0</li>
            <li><strong>Large rice:</strong> $4.0</li>
          </ul>
          <button
            onClick={() => setShow(false)}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded-full transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
