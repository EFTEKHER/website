import React from "react";
import shop from "./images/shop.png";
import coconut from "./images/coconut.png";
import peanut from "./images/peanut.png";
import tea from "./images/tea-tree.png";
import {Adocado,Hemp,Nuts,PeanetButers,Pumpkins,sunflower,teaTree,walnut} from "./images/index.js"
const Header = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center min-w-full bg-violet-300 rounded-sm py-10 px-12 flex-wrap md:flex-nowrap space-y-12 md:space-y-0 flex-col-reverse md:flex-row">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
            Tailwind e-Commerce{" "}
          </span>
          <p className="leading-relaxed font-medium text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            dignissimos minima, ipsam earum consequatur odit dolor officia modi
            nisi, expedita ipsum ipsa? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Optio, sed.. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Inventore, fugiat provident qui
            ducimus eos ab
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <span className="ml-2"> Buy Now</span>
          </button>
        </div>

        <div className="">
          <img className="w-full animate-bounce-slow " src={shop} alt="" />{" "}
        </div>
      </div>

      <div className="container mx-auto p-2">
        <h1 className=" text-center text-2xl md:text-4xl  leading-relaxed font-bold font-sans underline decoration-wavy mb-3">
          Why you should choose us?
        </h1>

        <div className="flex mt-16 justify-center gap-8 md:flex-nowrap flex-wrap">
          <div className="bg-green-100 text-center p-4 shadow-lg rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
            <h2 className="text-2xl mt-8">High Quality of Product</h2>
          </div>
          <div className="bg-purple-100 text-center p-4 shadow-lg rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                fillRule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-2xl mt-8">Easy payment system</h2>
          </div>
          <div className="bg-indigo-100 text-center p-4 shadow-lg rounded ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <h2 className="text-2xl mt-8">Secure Payment System</h2>
          </div>
          <div className="bg-violet-600 rounded shadow-lg  p-10 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-20 w-20 mx-auto">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <h2 className="text-2xl mt-8 leading-relaxed">Get a Certificate</h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-2">
        <h1 className=" text-center text-2xl md:text-3xl text-gray-600 underline decoration-solid underline-offset-8 decoration-2 decoration-pink-600  space-y-2">
          Top Selling Products.
        </h1>
      </div>

      <div className="flex justify-center md:flex-nowrap flex-wrap gap-8 mt-24">
        <div className="bg-pink-300 px-4 py-4 space-y-2 rounded-xl hover:scale-110">
          <img className="w-72 object-cover mx-auto " src={coconut} alt="" />
          <h3 className="text-2xl font-bold  text-[gray] leading-relaxed">
            Coconut oil
          </h3>
          <p className="text-xl   text-[gray] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            fugiat?
          </p>
          <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <span className="ml-2"> Buy Now</span>
          </button>
        </div>
        <div className="bg-purple-300 px-4 py-4 rounded-xl space-y-2 hover:scale-110  mx-4 my-4  shadow-xl">
          <img className="w-72 object-cover mx-auto" src={peanut} alt="" />
          <h3 className="text-2xl font-bold text-[gray] leading-relaxed">
            Peanut oil
          </h3>
          <p className="text-xl   text-[gray] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            fugiat?
          </p>
          <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <span className="ml-2"> Buy Now</span>
          </button>
        </div>
        <div className="bg-violet-300 px-4 py-4 space-y-2  rounded-xl  mx-4 my-4 shadow-xl">
          <img className="w-72 object-cover mx-auto " src={tea} alt="" />
          <h3 className="text-2xl  font-bold text-[gray] leading-relaxed">
            Tea
          </h3>
          <p className="text-xl   text-[gray] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            fugiat?
          </p>
          <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <span className="ml-2"> Buy Now</span>
          </button>
        </div>
       
      </div>

     
      <div className="container mx-auto p-2">
        <h1 className=" text-center text-2xl md:text-3xl text-gray-600 underline decoration-solid underline-offset-8 decoration-2 decoration-pink-600  space-y-2">
          Most popular Products
        </h1>
        <div className="grid md:grid-cols-4 md:gap-4 gap-8 mx-4 my-4 mt-16">
          <div className="bg-yellow-300 p-4 rounded-xl space-y-2 hover:scale-110 mx-4 my-4 shadow-xl">
            <img className="w-72 object-cover mx-auto" src={Adocado} alt="" />
            <h3 className="text-2xl font-bold text-[gray] leading-relaxed">
              Peanut oil
            </h3>
            <p className="text-xl   text-[gray] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, fugiat?
            </p>
            <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span className="ml-2"> Buy Now</span>
            </button>
          </div>
          <div className="bg-green-300 px-4 py-4 rounded-xl space-y-2  hover:scale-110 mx-4 my-4 shadow-xl">
            <img className="w-72 object-cover mx-auto" src={Hemp} alt="" />
            <h3 className="text-2xl font-bold text-[gray] leading-relaxed">
              Peanut oil
            </h3>
            <p className="text-xl   text-[gray] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, fugiat?
            </p>
            <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span className="ml-2"> Buy Now</span>
            </button>
          </div>
          <div className="bg-red-300 px-4 py-4 rounded-xl space-y-2 hover:scale-110 mx-4 my-4 shadow-xl">
            <img className="w-72 object-cover mx-auto" src={Nuts} alt="" />
            <h3 className="text-2xl font-bold text-[gray] leading-relaxed">
              Peanut oil
            </h3>
            <p className="text-xl   text-[gray] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, fugiat?
            </p>
            <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span className="ml-2"> Buy Now</span>
            </button>
          </div>
          <div className="bg-blue-300 px-4 py-4 rounded-xl space-y-2 hover:scale-110 mx-4 my-4 shadow-xl">
            <img className="w-72 object-cover mx-auto" src={PeanetButers} alt="" />
            <h3 className="text-2xl font-bold text-[gray] leading-relaxed">
              Peanut oil
            </h3>
            <p className="text-xl   text-[gray] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, fugiat?
            </p>
            <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span className="ml-2"> Buy Now</span>
            </button>
          </div>
          <div className="bg-purple-300 px-4 py-4 rounded-xl space-y-2 hover:scale-110 mx-4 my-4 shadow-xl">
            <img className="w-72 object-cover mx-auto" src={Pumpkins} alt="" />
            <h3 className="text-2xl font-bold text-[gray] leading-relaxed">
              Peanut oil
            </h3>
            <p className="text-xl   text-[gray] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, fugiat?
            </p>
            <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span className="ml-2"> Buy Now</span>
            </button>
          </div>
          <div className="bg-amber-300 px-4 py-4 rounded-xl space-y-2 hover:scale-110  mx-4  my-4 shadow-xl">
            <img className="w-72 object-cover mx-auto" src={sunflower} alt="" />
            <h3 className="text-2xl font-bold text-[gray] leading-relaxed">
              Peanut oil
            </h3>
            <p className="text-xl   text-[gray] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, fugiat?
            </p>
            <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span className="ml-2"> Buy Now</span>
            </button>
          </div>
          <div className="bg-teal-300 px-4 py-4 rounded-xl space-y-2 hover:scale-110  mx-4 my-4 shadow-xl">
            <img className="w-72 object-cover mx-auto" src={teaTree} alt="" />
            <h3 className="text-2xl font-bold text-[gray] leading-relaxed">
              Peanut oil
            </h3>
            <p className="text-xl   text-[gray] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, fugiat?
            </p>
            <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span className="ml-2"> Buy Now</span>
            </button>
          </div>
          <div className="bg-pink-300 px-4 py-4 rounded-xl space-y-2 hover:scale-110  mx-4 my-4 shadow-xl">
            <img className="w-72 object-cover mx-auto" src={walnut} alt="" />
            <h3 className="text-2xl font-bold text-[gray] leading-relaxed">
              Peanut oil
            </h3>
            <p className="text-xl   text-[gray] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, fugiat?
            </p>
            <button className="bg-gradient-to-r self-center from-yellow-500 to-pink-600 rounded py-2 px-6 leading-relaxed hover:bg-gradient-to-l hover:shadow-2xl mx-auto md:ml-0 shadow-purple-500/60 flex items-center text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span className="ml-2"> Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
