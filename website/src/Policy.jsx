import React from 'react'
import { cartoon } from './images/index'
const Policy = () => {
  return (
    
    <div className="container mx-auto p-2 mt-24">
      <h1
        class="text-center text-4xl text-gray-700 underline decoration-double underline-offset-8 decoration-2 decoration-pink-600"
      >
        Our Business Policies
      </h1>
      <div className="flex justify-between items-center md:flex-nowrap flex-wrap">
        <div className="md:w-1/2 w-full">
          <img className="w-full" src={cartoon} alt="Shop" />
        </div>
        <div className="space-y-6 md:text-left text-center md:w-1/2 w-full">
          <span
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
            >Our Trusted business Tailwind oil</span
          >
          <p className="text-gray-600 font-light">
            Nostrum soluta accusantium eligendi fugiat rem tenetur porro sit,
            obcaecati iste, iure quidem commodi minima! Iure similique
            laboriosam iusto consectetur, atque impedit! Nostrum soluta
            accusantium eligendi fugiat rem tenetur porro sit, obcaecati iste,
            iure quidem commodi minima! Iure similique laboriosam iusto
            consectetur, atque impedit!
          </p>
          <button
            className="bg-gradient-to-r from-purple-600 to-pink-600 py-2 px-4 text-white font-bold rounded shadow-lg shadow-purple-500/25 flex items-center mx-auto md:ml-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2">Read more</span>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Policy
