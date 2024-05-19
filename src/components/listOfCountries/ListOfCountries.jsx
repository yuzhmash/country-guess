import { useState } from "react";

import ListOfCountriesItem from "../listOfCountriesItem/ListOfCountriesItem";
import SortBy from "../sortBy/SortBy";

import "./ListOfCountries.sass"

const ListOfCountries = () => {
    const [sortByRegion, setSortByRegion] = useState("xyi")
    const [sortBy, setSortBy] = useState("")
    console.log(sortBy);
    console.log(sortByRegion);
    return (
        <main>
            <div className="title">LIST OF COUNTRIS</div>
            <div className="countries__wrapper">
                <ListOfCountriesItem 
                    sortBy={sortBy}
                    sortByRegion={sortByRegion}/>
                <SortBy 
                    setSortBy={setSortBy}
                    sortBy={sortBy}
                    setSortByRegion={setSortByRegion}
                    sortByRegion={sortByRegion}/>
            </div>
        </main>
    )
}
export default ListOfCountries;