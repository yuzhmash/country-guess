import { useState, useEffect } from "react"
import PropTypes from 'prop-types';


import "./SortBy.sass"

const SortBy = ({setSortByRegion, setSortBy, sortByRegion, sortBy}) => {

    const btnsName = ["all", "Africa", "Europe", "Americas", "Asia", "Oceania"]
    const btnsSorts = ["most populated", "a-z", "z-a"]

    const btns = btnsName.map((elem, i) => {
        return (
            <div key={i}>
                <input
                    type="radio" 
                    id={elem} 
                    name={sortByRegion} 
                    value={elem} 
                    onChange={(e) => setSortByRegion(e.target.value)} 
                    defaultChecked={i === 0} />
                <label htmlFor={elem}>{elem}</label>
            </div>
        )
    })

    const sorts = btnsSorts.map((elem, i) => {
        return (
            <div key={i}>
                <input 
                    type="radio" 
                    id={elem} 
                    name={sortBy} 
                    value={elem} 
                    onChange={(e) => setSortBy(e.target.value)}/>
                <label htmlFor={elem}>{elem}</label>
            </div>
        )
    })



    return (
        <div className="countries__wrapper__sorts">
            <div className="countries__wrapper__smth">
                <div className="countries__wrapper_regions" >
                    region
                </div>
                <form className="countries__wrapper_form" >
                    {btns}
                </form>
            </div>
            <div className="countries__wrapper__smt">
                <div className="countries__wrapper_sort-by" >
                    sort by
                </div>
                <form>
                    {sorts}
                </form>
            </div>
        </div>
    )
}


SortBy.propTypes = {
    setSortByRegion: PropTypes.func,
    setSortBy: PropTypes.func,
    sortByRegion: PropTypes.string,
    sortBy: PropTypes.string
};

export default SortBy;