import { Component } from "react";
class Detail extends Component{
    constructor(){
        super();
        this.state = {data:[]}
        this.goHome = this.goHome.bind(this)
    }
    componentDidMount(){
        let link = `https://restcountries.com/v3.1/name/${this.props.selected}`
        fetch(link)
        .then(response => response.json())
        .then(json => this.setState({data:json[0]}))
    }
    goHome(){
        this.props.backButton("home")
    }
    render(){
        console.log(this.state.data)
        let country = this.state.data
        
        if(this.state.data.length != 0){
            let currencies = []
            let languages = []
            Object.keys(country.currencies).forEach(elem => {     
                currencies.push(country.currencies[elem].name)
            })
            Object.keys(country.languages).forEach(elem => {
                languages.push(country.languages[elem])
            })
            return(
                <>
                <div className="mx-6 md:mx-16 my-12 cursor-pointer">
                    <h1 className="bg-white rounded-front shadow-front w-32 py-1 text-center dark:bg-darkelem dark:text-white" onClick={this.goHome}>Back</h1>
                </div>
                <div className="flex items-center md:gap-26 gap-4 mx-6 md:mx-16 flex-col md:flex-row dark:text-white">
                    <img className="details-image md:w-[40vw] md:h=[45vh]" src={country.flags.png}></img>
                    <div className="grow h-3/4">
                        <h1 className="font-bold text-2xl mb-6">{country.name.common}</h1>
                        <div className="flex flex-col md:flex-row justify-between ">
                            <div className="grid gap-1">
                                <h3><b>Native name: </b>{country.name.official}</h3>
                                <h3><b>Population:</b> {country.population.toLocaleString()}</h3>
                                <h3><b>Region:</b> {country.region}</h3>
                                <h3><b>Sub Region:</b> {country.subregion}</h3>
                                <h3><b>Capital:</b> {country.capital[0]}</h3>
                            </div>
                            <div className="grid h-min gap-1 mt-12 md:mt-0 ">
                                <h3><b>Top Level Domain:</b> {country.tld}</h3>
                                <h3><b>Currency:</b> {currencies.join(', ')}</h3>
                                <h3><b>Languages:</b> {languages.join(', ')}</h3>
                            </div>  
                        </div>
                    </div>
                </div>
                </>
            )
        }else{
            return(<></>)
        }
    }
}

export default Detail
/*                         <table className="w-full mt-6 ">
                            <tr>
                                <td>
                                    <h3><b>Native name: </b>{country.name.official}</h3>
                                </td>
                                <td>
                                    <h3><b>Top Level Domain:</b> {country.tld}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3><b>Population:</b> {country.population.toLocaleString()}</h3>
                                </td>
                                <td>
                                    <h3><b>Currency:</b> {currencies.join(', ')}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3><b>Region:</b> {country.region}</h3>
                                </td>
                                <td>
                                    <h3><b>Languages:</b> {languages.join(', ')}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td><h3><b>Sub Region:</b> {country.subregion}</h3></td>
                            </tr>
                            <tr>
                                <td><h3><b>Capital:</b> {country.capital[0]}</h3></td>
                            </tr>
                        </table> */