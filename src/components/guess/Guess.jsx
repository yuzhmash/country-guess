import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import InputField from "../InputField/InputField";
import Hints from "../hints/Hints";
import useCountriesServer from "../../services/CountriesServer";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./Guess.sass"

const Guess = () => {

    const [currentCountry, setCurrentCountry] = useState({})
    const [filtredArr, setFiltredArr] = useState({name: "", num: 0})
    // const [loading, setLoading] = useState(true)

    const {getRandomCountry, loading, error} = useCountriesServer()

    useEffect(() => {
        getRandomCountry(filtredArr.name, filtredArr.num).then(data => setCurrentCountry(data))
    }, [filtredArr])

    console.log(currentCountry);

    const spinner = loading ? <Spinner/> : null;
    const errorMassage = error ? <ErrorMessage/> : null

    return (
        <main className="main">
            <h1 className="title"> 
                GUESS THE COUNTRY
            </h1>
            <div className="main__wrapper">
                {spinner}
                {errorMassage}
                {<View img={currentCountry.img} alt={currentCountry.alt} currentCountry={currentCountry} setCurrentCountry={setCurrentCountry} filtredArr={filtredArr} setFiltredArr={setFiltredArr} />}
            </div>
        </main>
    )
}

const View = ({img, alt, currentCountry, setCurrentCountry, filtredArr, setFiltredArr}) => {
    return (
        <>
            <div className="main__wrapper_img">
                <img src={img} alt={alt} />
            </div>
                <div>
                <InputField currentCountry={currentCountry} setCurrentCountry={setCurrentCountry} filtredArr={filtredArr} setFiltredArr={setFiltredArr}/>
                <Hints currentCountry={currentCountry}/>
            </div>
        </>
    )
}

View.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    setCurrentCountry: PropTypes.func,
    currentCountry: PropTypes.object.isRequired,
    filtredArr: PropTypes.object.isRequired,
    setFiltredArr: PropTypes.func.isRequired
};

export default Guess;