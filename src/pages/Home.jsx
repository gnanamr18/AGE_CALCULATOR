import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Button from '../component/Button';

const Home = () => {
  const [dob, setDob] = useState('');
  const [ageDate, setAgeDate] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate()


  const handleClick = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date(ageDate);


    if (birthDate > currentDate) {
      alert('Birth date cannot be greater than the current date!',);     
      return; 
    }

    if (!dob || !ageDate) {
      alert("Date cannot be Empty");
      return;
    }
    // Calculate age
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust months and days if necessary
    if (days < 0) {
      months--;
      days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // Get the last day of the previous month
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // Set the calculated age
    const calculatedAge = ` ${years} years, ${months} months, and ${days} days`;

    setAge(`Age: ${years} years, ${months} months, and ${days} days`);
    navigate('/result',{ state:  { age: calculatedAge,years,months,days } })
  };

  return (
    <div className='h-screen w-full  flex flex-col  items-center justify-center  bg-violet-800'>
      
      {/* Home */}
      <div className='max-w-xl w-full  mx-auto p-14 mb-20   border rounded-lg shadow-lg bg-yellow-400'>
      {/* heading */}
      
      <div className='bg-green-800 w-full  text-white text-center  px-4 py-2 text-2xl '>
        AGE CALCULATOR
      </div>
      
      {/* body */}
      
      <div className="p-14 bg-gray-300">
        {/* birthdate div */}
      <div className="flex flex-col mb-5">
          <label className="text-black font-bold mb-1">DATE OF BIRTH</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="p-2 border rounded  w-full"
          />
      </div>
      {/* current date div */}
      <div className="flex flex-col mb-5">
          <label className="text-black font-bold mb-1">AGE AT THE DATE OF</label>
          <input
            type="date"
            value={ageDate}
            onChange={(e) => setAgeDate(e.target.value)}
            className="p-2 border rounded w-full"
          />
      </div>
      <Button onClick={handleClick} children={"CALCULATE"}/>

      
      </div>
    
    </div>

    </div>
  );
};

export default Home;
