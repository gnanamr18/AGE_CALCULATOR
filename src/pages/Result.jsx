import React from 'react'
import Button from '../component/Button'
import { useNavigate, useLocation } from 'react-router-dom'; 



const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { age, years, months, days } = location.state || {};

    const totalMonths =` ${years*12 +months}months and ${days} days `

    const totalDays = `${years*365 + days}`
    
    const hours = `${totalDays*24} hours`




    function handleClick(){
        navigate('/')
    }
  return (
    <div>
        <div className='h-screen w-full  flex flex-col  items-center justify-center  bg-violet-800'>
      
      {/* Home */}
      <div className='max-w-xl w-full  mx-auto mb-20 p-10 border rounded-lg shadow-lg bg-yellow-400'>
      {/* heading */}
      
      <div className='bg-green-800 w-full  text-white text-center  px-4 py-2 text-2xl '>
        RESULT
      </div>
      
      {/* body */}
      <div  className='bg-gray-200 p-6 py-10'>

      {age ? (
          <p className='text-lg text-center font-serif font-bold'>Your AGE IS:
          
          <p className='text-xl text-center font-serif '>{age}</p>

          <p>or</p>
          <p className='text-xl text-center font-serif '>{totalMonths}</p>
          <p>or</p>
          <p className='text-xl text-center font-serif '>{totalDays} days</p>
          <p>or</p>
          <p className='text-xl text-center font-serif '>{hours}</p>
          </p>
          
        ) : (
          <p className='text-lg text-center text-red-500'>No age data available.</p>
        )} 
        </div>     
      <div className="p-1 bg-gray-100">
        
      <Button onClick={handleClick} children={"BACK"}/>

      
      </div>
    
    </div>

    </div>
      
    </div>
  )
}

export default Result
