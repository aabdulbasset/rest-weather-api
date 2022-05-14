import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
let setFunction
function toggleNight(){
    let body = document.querySelector("body")
    if(body.classList.contains("light")){
        setFunction(true)
        body.classList.add("dark")
        body.classList.remove("light")
    }else{
        setFunction(false)
        body.classList.add("light")
        body.classList.remove("dark")
    }

}

export default function Navbar(){
    const [night,setNight] = useState(false)
    setFunction = setNight
    return(
        <div className="flex justify-between items-center text-textlight px-4 dark:text-white bg-white shadow py-4 w-full dark:bg-darkbg md:px-24">
            <h2 className='font-bold text-sm md:text-xl cursor-pointer'><a href="/">Where in the world?</a></h2>
            <h2 className='flex items-center text-sm md:text-lg font-bold cursor-pointer dark:text-white dark-toggle' onClick={toggleNight} ><FontAwesomeIcon icon={night? "sun" : "moon"} className='mx-2' /> Dark mode</h2>
        </div>
    )
}