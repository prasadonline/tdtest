import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav'
import { useNavigate } from "react-router-dom";
import authService from '../services/auth.service';
import Data from '../components/Data';
const Home = () => {
  const navigate = useNavigate();

  let islogged = authService.islogged();

  useEffect(() => {
    if (!islogged) {
      navigate("/login")
    }



  }, [])
  return (
    <>
      <Nav></Nav>

      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6$ py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
            Orders Delivery List
          </h1>

          <div class="flex justify-center mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
          <div>
            <Data />
          </div>
        </div>



      </section>
    </>
  )
}

export default Home