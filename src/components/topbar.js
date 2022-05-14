
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let setCountries
function toggle(){
    let menu = document.getElementById("select-menu")
    if(menu.classList.contains("max-h-0")){
        menu.classList.add("max-h-96")
        menu.classList.add("py-4")
        menu.classList.remove("max-h-0")
    }else{
        menu.classList.remove("max-h-96")
        menu.classList.remove("py-4")
        menu.classList.add("max-h-0")

    }
}

async function fetcher(link){
    const response = await fetch(link)
    await response.json().then((data)=>{
        
        let countryList = []
        let capital = "none"
        data.forEach((country,i)=>{
          try{
            capital = country.capital[0]
          }catch(err){
            capital = "none"
          }
          countryList.push({
            "name":country.name.common,
            "region":country.region,
            "population":country.population,
            "capital":capital,
            "flag":country.flags.png
          })
        })
        return countryList
      }
    ).then((countryList)=>{
      setTimeout(()=>{
        setCountries(countryList)
      },250)
    })
}

function handleSearch(e){
    if(e.code == "Enter"){
        let link = `https://restcountries.com/v3.1/name/${e.target.value}`
        fetcher(link)
    }
}
function filter(e){
    let link = `https://restcountries.com/v3.1/region/${e.target.outerText}`
    fetcher(link)
}

export default function Topbar(props){
    let elements = []
    let regions = ["Africa","Europe","America","Oceania","Asia"]
    setCountries = props.setfunction
    return(
        <div className="flex justify-between mx-4 md:mx-24 py-6 mt-4 gap-y-4 flex-col lg:flex-row ">
            <div className='justify-self-start bg-white shadow-front outline-slate-300 rounded-front flex items-center lg:w-1/2 dark:bg-darkelem  dark:text-white'>
                <FontAwesomeIcon icon="search" className='mx-3' />
                <input name="country-search" onKeyDown={handleSearch} type="text" className="outline-0 grow py-3 dark:bg-darkelem" placeholder="Search for a country..."></input>
            </div>
            <div className='flex flex-col relative w-fit'>
                <div className='bg-white cursor-pointer shadow-front pr-12 pl-6 py-4 rounded-front font-[400] dark:bg-darkelem dark:text-white' onClick={toggle}>Filter by Region <FontAwesomeIcon icon="chevron-down" className='relative text-[10px] left-8 z-10' /></div>
                <div className='styled-select absolute top-[105%] rounded-md bg-white overflow-hidden min-w-[200px] max-h-0 px-4 shadow-lg transition-all duration-500 dark:bg-darkelem dark:text-white' id="select-menu">
                    {regions.map((elem)=>{
                        return(<h2 className='hover:bg-slate-50  p-1 font-[600]' onClick={filter}>{elem}</h2>)
                    })}
                </div>
            </div>
        </div>
    )
}