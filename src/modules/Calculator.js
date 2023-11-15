import React, { useRef, useState } from 'react'

const Calculator = () => {
  const degree = useRef(null);
  const result = useRef(null);
  const [selectedItem, setSelectedItem] = useState('Fahrenhiet');


  // Event handler to update the selected value
  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };
  let convert = () => {
    console.log(selectedItem);
    if (selectedItem === 'Fahrenhiet') {

      result.current.value = (parseFloat((degree.current.value - 32) * 5 / 9).toFixed(2) + ' °F');
    }
    else if (selectedItem === 'Celcius') {

      result.current.value = (parseFloat((degree.current.value * 9 / 5) + 32).toFixed(2) + ' °C');
    }
  }
  return (

    <div className='flex flex-col justify-center items-center w-full h-screen gap-y-4'>
      <h1 className='text-blue-700 text-3xl font-sans '>Temprature Converter</h1>
      <div className='flex flex-col w-[33%] shadow-black shadow-sm bg-white p-4 gap-y-6'>
        {/* first input portion */}
        <div className='flex flex-row gap-x-4 w-[100%] '>
          <div className='flex flex-col  w-[47%]'>
            <label htmlFor="degrees" className='font-sans text-blue-500 text-lg'>Degrees</label>
            <input type="text" className='bg-transparent border-b-2 border-b-blue-500 p-2 outline-none ' id='degrees' name='degrees' ref={degree} />
          </div>
          <div className='flex flex-col  w-[47%]'>
            <label htmlFor="degrees" className='font-sans text-blue-500 text-lg'>Type</label>
            <select className='bg-transparent border-b-2 border-b-blue-500 p-2 outline-none ' value={selectedItem} onChange={handleSelectChange}>

              <option value="Fahrenhiet" className='font-sans text-blue-500 text-lg'>Fahrenhiet</option>

              <option value="Celcius" className='font-sans text-blue-500 text-lg'>Celcius</option>



            </select>
          </div>
        </div>
        {/* second input */}
        <div className='flex flex-col w-[97%]'>
          <label htmlFor="result" className='font-sans text-blue-500 text-lg'>Result</label>
          <input type="text" className='bg-transparent border-b-2 border-b-blue-500 p-2 outline-none' id='result' name='result' ref={result} />
        </div>
        {/* button */}
        <button className='bg-blue-500 text-white p-3 rounded-md' onClick={convert}>Convert</button>
      </div>
    </div>

  )
}

export default Calculator