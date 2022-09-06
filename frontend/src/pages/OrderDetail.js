import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';
const OrderDetail = () => {
  const API_URL = "http://localhost:8081/";
  const { orderId } = useParams();



  return (<>
    <Nav />
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6$ py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
          Order Delivery Details
        </h1>

        <div class="flex justify-center mx-auto mt-6">
          <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <div>
          <div className='paddingTop'>
            <div onClick={() => console.log("hh")} className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="w-1/3 bg-cover" ><img src="https://www.shareicon.net/data/512x512/2016/09/29/836843_delivery_512x512.png"></img></div>

              <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Order</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className='text-1xl font-bold text-gray-800 dark:text-white'>Tracking Number: </span>BJPT0001195</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className='text-1xl font-bold text-gray-800 dark:text-white'>connoteNumber: </span>61497057</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className='text-1xl font-bold text-gray-800 dark:text-white'>Order Company: </span>GSS</p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className='text-1xl font-bold text-gray-800 dark:text-white'>orderPostcodeFrom: </span>1041</p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className='text-1xl font-bold text-gray-800 dark:text-white'>orderRegionFrom: </span>Mount Roskill"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex space-x-2 justify-center">
        <Link to="/home"><button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >back</button></Link>
      </div>
    </section>
  </>
  )
}
export default OrderDetail