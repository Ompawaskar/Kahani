import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white pt-4 border-t-2 border-garay-100">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 flex gap-2">
                        <Link to="/" className="flex items-center">
                            <img src='/logo3.png' className="mr-3 h-16 md:h-12" alt="Logo" />
                        </Link>
                        <div className="text-black md:mt-8 mt-2">
                            <h1 className="font-bold text-xl">Get Creative</h1>
                            <h4>Ignite Young Minds.</h4>
                        </div>
                    </div>

                    <div>
                        <div className=" mr-16 mt-6 md:mr-8 flex items-center justify-center w-full">
                            <ul className="text-black font-medium flex justify-between items-center gap-8 ">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block  duration-200 ${isActive ? "text-purple-700" : "text-black"
                                            }  
                                        transition-all duration-2000 hover:underline 
                                        lg:hover:bg-transparent lg:border-0  lg:p-0 `
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <Link
                                        to='https://github.com/Ompawaskar'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Github
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className=" mr-16 mt-6 md:mr-8 flex items-center justify-center w-full ">
                            <ul className="text-black font-medium flex justify-between items-center gap-8">
                                <li>
                                    <Link
                                        to="#"
                                    >
                                        Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                    >
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="flex items-center justify-between flex-col-reverse gap-4 sm:flex-row">
                    <span className="text-sm text-black sm:text-center">
                        © 2024 Designed by Om
                    </span>

                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link
                            to="https://www.instagram.com/om_pawaskar"
                            className="text-black hover:text-gray-900 "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                            </svg>
                            <span className="sr-only">Insta page</span>
                        </Link>

                        <Link
                            to="https://www.linkedin.com/in/om-pawaskar-6922a8242/"
                            className="text-black w-5 h-5 fill-current"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 50 50"
                            >
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                            <span className="sr-only">LinkedIn page</span>
                        </Link>
                        <Link
                            to="#"
                            className="text-black w-5 h-5 fill-current"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 24 24"
                            >
                                <path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"></path>
                            </svg>
                            <span className="sr-only">Youtube</span>
                        </Link>
                        <Link
                            to="mailto:ompawaskar7@gmail.com"
                            className="w-5 h-5 fill-current text-black"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M384 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.63 419.4 32 384 32zM384 336c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V225.9l138.5 69.27C209.3 298.5 216.6 300.2 224 300.2s14.75-1.688 21.47-5.047L384 225.9V336zM384 190.1l-152.8 76.42c-4.5 2.25-9.812 2.25-14.31 0L64 190.1V176c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32V190.1z" />
                            </svg>
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}