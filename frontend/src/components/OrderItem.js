import React from 'react'
import { Link } from 'react-router-dom';
const OrderItem = ({ order }) => {

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div onClick={() => console.log("hh")} className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="w-1/3 bg-cover" ><img src="https://www.shareicon.net/data/512x512/2016/07/22/800285_delivery_512x512.png"></img></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Order</h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className='text-1xl font-bold text-gray-800 dark:text-white'>Tracking Number: </span>{order.trackingNumber}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><span className='text-1xl font-bold text-gray-800 dark:text-white'>Order Company: </span>{order.orderCompany}</p>
        <Link to={"/order/" + order.id}><button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >Track the order</button></Link>
      </div>
    </div>


  )
}

export default OrderItem