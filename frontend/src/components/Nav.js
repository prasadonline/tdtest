import React from 'react'
import { Link } from "react-router-dom";
import authService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
const Nav = () => {

  const navigate = useNavigate();

  let islogged = authService.islogged();



  const logoutHandler = () => {
    authService.logout();
    navigate("/login");

  }
  return (
    <>
      <header class="bg-gray-900">
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-1 md:flex md:items-center md:gap-12">
              <a class="block text-teal-300" >

              </a>
            </div>

            <div class="md:flex md:items-center md:gap-12">


              <div class="flex items-center gap-4">
                {islogged ? (

                  <div class="sm:gap-4 sm:flex">

                    <a href="javascript: void(0)" onClick={logoutHandler}
                      class="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-md shadow"

                    >
                      Logout
                    </a>


                  </div>
                ) : (<div class="sm:gap-4 sm:flex">

                  <Link to="/login"><a
                    class="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-md shadow"

                  >
                    Login
                  </a></Link>

                  <div class="hidden sm:flex">

                  </div>
                </div>)}


                <div class="block md:hidden">
                  <button
                    class="p-2 text-white transition bg-gray-800 rounded hover:text-white/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav