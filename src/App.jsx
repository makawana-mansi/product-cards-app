import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Componets/Card'



const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(0)


  const getData = async () => {
    const response = await axios.get(`https://dummyjson.com/products?limit=8&skip=${index}`)
    console.log(response.data)
    setUserData(response.data.products)
  }

  let data = <h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 font-semibold'>Loadding.......</h3>

  if (userData.length > 0) {
    data = userData.map(function (i, index) {

      return <div key={i.id} className='w-70'>

        <Card i={i} />
      </div>
    })
  }

  useEffect(function () {
    getData()
  }, [index])


  return (
    <div className='bg-black  min-h-screen text-white'>

      <div className='flex flex-wrap justify-center gap-4 px-3 sm:px-5 md:px-8 lg:pl-30 lg:pr-5 py-2'>
        {data}
      </div>
      <div className='flex gap-2 justify-center'>
        <button onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
          }
        }} className="border cursor-pointer border-gray-500 transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 w-30 rounded mb-5 py-2 text-xl mt-3 active:scale-90">Prev</button>

        <h2 className='flex justify-center text-gray-500 font-semibold text-xl mt-4'>Page{index + 1}</h2>

        <button onClick={() => {
          setIndex(index + 1)
        }} className='border cursor-pointer border-gray-500 transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 w-30 rounded mb-5 py-2 text-xl mt-3 active:scale-90'>Next</button>
      </div>
    </div>
  )
}
export default App
