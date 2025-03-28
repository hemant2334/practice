import React, { useEffect, useState } from 'react'


const Counter = () => {
    const [theme, setTheme] = useState()

    return (
        <div className={`flex flex-row h-full items-center justify-center ${theme === "Light"? "bg-white": "bg-gray-600 text-white"} gap-x-9`}>
            <button className='border-none cursor-pointer'onClick={() => {setTheme("Light")}}>
                Light
            </button>
         
            <div className='w-16 h-5 border-1 rounded-[10px]'>
                <div className={`bg-blue-500 rounded-4xl w-7 ${theme === "Light"? "ml-0": "ml-8.5"} h-full`}></div>
            </div>
            <button className="border-none cursor-pointer" onClick={() => {setTheme("Dark")}}>
                Dark
            </button>
        </div>

    )
}

export default Counter
