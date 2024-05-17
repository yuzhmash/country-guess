import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import useCountriesServer from "../../services/CountriesServer";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import "./ListOfCountriesItem.sass"

const ListOfCountriesItem = ({sortByRegion, sortBy}) => {

    const [data, setData] = useState([])
    const [sortDataByRegion, setSortDataByRegion] = useState([])
    const [sortBySorts, setSortBySorts] = useState([])

    const {getAllCoutries, loading, error} = useCountriesServer()

    useEffect(() => {
        getAllCoutries().then(data => setData(data))
    }, [])

    useEffect(() => {
        if (typeof sortByRegion === "number") {
            setSortDataByRegion(data);
        }
    }, [data])

    useEffect(() => {
        if (sortByRegion === "all") {
            return setSortDataByRegion(data);
        }
        setSortDataByRegion(data.filter(({region}) => region === sortByRegion))
    }, [sortByRegion])

    useEffect(() => {
        console.log(sortDataByRegion);
        switch (sortBy) {
            case "most populated":
                sortDataByRegion.sort((a, b) => b.population - a.population)
                break;
            case "a-z":
                sortDataByRegion.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
                break;
            case "z-a":
                sortDataByRegion.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
                break;
            default: 
                break;
        }
    }, [sortBy])

    // console.log(sortDataByRegion);

 
    const items = sortDataByRegion.map(({img, alt, name, capital, languages, region, population}, i) => {
        if (i >= 9) return
        return (
            <div className="countries-list_item" key={i} >
                <div className="countries-list_item_img" >
                    <img src={img} alt={alt} />
                </div>
                <h2 className="countries-list_item_title">
                    {name}
                </h2>
                <div className="countries-list_item_capital">capital: {capital}</div>
                <div className="countries-list_item_pop">population: {`${population}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</div>
                <div className="countries-list_item_lang">national language: {languages}</div>
                <div className="countries-list_item_region">region: {region}</div>
            </div>
        )
    })


    const errorMessage = error ? <ErrorMessage/> : null
    const spinner = loading ? <Spinner/> : null

    return (
        <>
        {errorMessage}
        {spinner}
        <div className="countries-list" >
            {items}
        </div>
        </>
    )
}

ListOfCountriesItem.propTypes = {
    sortByRegion: PropTypes.string,
    sortBy: PropTypes.string
};

export default ListOfCountriesItem;