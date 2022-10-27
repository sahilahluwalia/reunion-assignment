import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className=" bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <span className="cursor-pointer self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Estatery
          </span>

          <div className="flex md:order-2 gap-5">
            <button
              type="button"
              className="text-blue-700 bg-white   hover:bg-blue-800 border-blue-800 border-[1px] hover:text-white   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
          <div className="justify-between flex list-none gap-10 py-2">
            <li className="cursor-pointer bg-blue-100  text-blue-800 px-5 py-2 rounded">
              Rent
            </li>
            <li className="cursor-pointer hover:bg-blue-200 hover:text-blue-800  rounded px-5 py-2 ">
              Buy
            </li>
            <li className="cursor-pointer hover:bg-blue-200 hover:text-blue-800 rounded px-5 py-2 ">
              Sale
            </li>
            <li className="cursor-pointer hover:bg-blue-200 hover:text-blue-800 rounded px-5 py-2 ">
              Manage Property
            </li>
            <li className="cursor-pointer hover:bg-blue-200 hover:text-blue-800 rounded px-5 py-2 ">
              Resources
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};
