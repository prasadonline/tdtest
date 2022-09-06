import React, { useEffect, useState } from 'react'
import OrderItem from './OrderItem';
import Pagination from './Pagination';
import axios from 'axios';
const Data = () => {

  const API_URL = "http://localhost:8081/";
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);
  const [data, setData] = useState([])
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const [currentRecords, setCurrentRecords] = useState([]);
  const nPages = Math.ceil(data.length / recordsPerPage)


  useEffect(() => {
    axios.get(API_URL + "getall").then((response) => {
      setData(response.data.body.data)
      setCurrentRecords(response.data.body.data.slice(indexOfFirstRecord,
        indexOfLastRecord))
    }).catch(e => console.log(e))
  }, [currentPage])


  return (
    <>
      <div className="grid grid-cols-2 mt-2 lg:grid-cols-3 gap-x-3 gap-y-8">

        {currentRecords.length != 0 && (currentRecords.map((order) => {
          return (<OrderItem key={Math.random()} order={order} />)
        }))

        }


      </div>

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </>

  );


}

export default Data