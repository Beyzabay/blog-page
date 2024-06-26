"use client"
import React, { useState } from "react";
import { GrBlog } from "react-icons/gr";
import "../globals.css";
import Link from "next/link";
import ThemeComp from "./ThemeComp";

const header = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex flex-row justify-between mt-5">
      <div> <Link href="/">
        <GrBlog className="size-9 m-4" />
        </Link>
      </div>
      <div className="flex content-center items-center gap-3">
        <ul className="flex flex-row gap-3">
          <li><Link href="/">Anasayfa</Link></li>
          <li>Blog</li>
        </ul>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-20 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 bg-transparent md:w-40"
            placeholder="Search..."
            required
          />
        </div>
        <div>
            <ThemeComp/>
        </div>
      </div>
    </div>
  );
};

export default header;