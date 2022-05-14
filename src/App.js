import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.js"
import Topbar from "./components/topbar.js"
import Card from "./components/card.js"
import Detail from './components/detail';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
let changePage,page,selectedCountry
async function initFetch(setCountries){
  const response = await fetch("https://restcountries.com/v3.1/all")
  await response.json().then((data)=>{
      let countryList = []
      let capital = "none"
      for(let i=20;i<28;i++){
        try{
          capital = data[i].capital[0]
        }catch(err){
          capital = "none"
        }
        countryList.push({
          "name":data[i].name.common,
          "region":data[i].region,
          "population":data[i].population,
          "capital":capital,
          "flag":data[i].flags.png
        })
      }
      return countryList
    }
  ).then((countryList)=>{
    setTimeout(()=>{
      setCountries(countryList)
    },250)
  })
  
}
function setDetails(e){
  let thing = e.target
  let found = false
  if(page == "details"){
    changePage("home")
  }else{
    while(!found){
      if (thing.classList.contains("parent")){
        found = true
      }else{
        thing = thing.parentElement
      }
      
    }
    selectedCountry = thing.dataset.country
    changePage("details")
  }
}
function App() {
  useEffect(()=>{
    initFetch(setCountries)
  },[])
  const[countries,setCountries] = useState([])
  const [page,setPage] = useState("home")
  changePage = setPage
  if(page == "home"){
    return (
      <div className='bg-[#FAFAFA] dark:bg-darkbg h-full'>
        <Navbar />
        <Topbar setfunction = {setCountries} />
        <div className='justify-items-center gap-y-8 md:gap-y-[4.5rem] grid mx-4 md:mx-16 mt-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {countries.map((country)=>{return <Card country={country} detailsFunction ={setDetails} />})}
        </div>
      </div>
    );
  }
  else{
    return(
      <div className='bg-[#FAFAFA] dark:bg-darkbg h-full'>
        <Navbar/>
        <Detail selected={selectedCountry} backButton ={setPage} />
      </div>
    )
  }
}

export default App;
