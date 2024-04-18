"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';


export default function Header() {
  const [ isOpen,  setMenu ] = useState(false);
  function toggleMenu() {
    setMenu(!isOpen);
  }

  return <header className="fixed left-0 top-0 bg-white w-full px-5 z-10 shadow-lg h-[80px] sm:h-auto">
    <nav className="flex justify-between items-center relative h-full">
      <a href="/">
        <Image
          src="/image/epoch_logo.jpg"
          alt="logo"
          width={174}
          height={100}
        />
      </a>
      <div className="flex flex-col sm:flex-row-reverse gap-4">
        <div className="ml-4">
          <button className="mr-3">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
          <button className="sm:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>
        <ul className={`flex-col sm:sticky sm:flex sm:flex-row sm:items-center sm:gap-6 text-nowrap text-center
          ${ isOpen ? 'flex fixed top-[80px] right-0 w-full h-full bg-white p-6' : 'hidden' }`}>
          <li className="py-4 border-b sm:p-0 sm:border-b-0"><Link href="/about">About Epoch</Link></li>
          <li className="py-4 border-b sm:p-0 sm:border-b-0"><Link href="/product">Products</Link></li>
          <li className="py-4 border-b sm:p-0 sm:border-b-0"><Link href="/contact">Contact Us</Link></li>
          <li className="py-4 border-b sm:p-0 sm:border-b-0"><Link href="/faq">FAQs</Link></li>
        </ul>
      </div>
    </nav>
  </header>
};