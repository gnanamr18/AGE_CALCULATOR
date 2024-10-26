import React from 'react'
import Button from '../component/Button'
import { useNavigate } from 'react-router-dom'; 


const Result = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/')
    }
  return (
    <div>
        <div className='h-screen w-full  flex flex-col  items-center justify-center  bg-violet-800'>
      
      {/* Home */}
      <div className='max-w-xl w-full  mx-auto p-10 border rounded-lg shadow-lg bg-yellow-400'>
      {/* heading */}
      
      <div className='bg-green-800 w-full  text-white text-center  px-4 py-2 text-2xl '>
        RESULT
      </div>
      
      {/* body */}
      
      <div className="p-10 bg-gray-100">
        
      <Button onClick={handleClick} children={"BACK"}/>

      
      </div>
    
    </div>

    </div>
      
    </div>
  )
}

export default Result
