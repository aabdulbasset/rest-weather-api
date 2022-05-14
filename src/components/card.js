
export default function Card(props){
    return(
        <div className="flex flex-col text-textlight bg-white shadow-front rounded-front w-[80%] parent cursor-pointer dark:bg-darkelem dark:text-white" data-country={props.country.name} onClick={props.detailsFunction}>
            <img className="country-flag rounded-t-front" src={props.country.flag}></img>
            <div className="px-8 pb-8">
                <h1 className="font-bold pt-5 pb-3">{props.country.name}</h1>
                <h3 className="text-sm"><div className="font-[600] inline">Population: </div>{props.country.population.toLocaleString()}</h3>
                <h3 className="text-sm"><div className="font-[600] inline">Region: </div>{props.country.region}</h3>
                <h3 className="text-sm"><div className="font-[600] inline">Capital: </div>{props.country.capital}</h3>
            </div>
        </div>
    )
}