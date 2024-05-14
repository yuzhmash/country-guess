import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import InputField from "../InputField/InputField";
import Hints from "../hints/Hints";
import useCountriesServer from "../../services/CountriesServer";
import Spinner from "../spinner/Spinner";

import "./Guess.sass"

const Guess = () => {

    const [currentCountry, setCurrentCountry] = useState({})
    const [currentRegion, setCurrentRegion] = useState({})
    const [currentDataRegion, setCurrentDataRegion] = useState([])
    const [newOne, setNewOne] = useState(false)
    const [loading, setLoading] = useState(false)
    const {data} = useCountriesServer()

    useEffect(() => {setCurrentDataRegion(data)}, [data])

    useEffect(() => {
        setCurrentDataRegion(data.filter(({region}) => region === currentRegion))
        console.log("hello");
        // getRandomCountry()
    }, [currentRegion])

    useEffect(() => {
        getRandomCountry()
    }, [loading, currentDataRegion])


    const getRandomCountry = () => {
        const randomNumber = Math.floor(Math.random() * currentDataRegion.length)
        setCurrentCountry(currentDataRegion[randomNumber])
    }
    
    console.log(currentCountry);

    if (!currentDataRegion || currentDataRegion.length === 0 || !currentCountry) {
        return <Spinner/>
    }


    // console.log(currentCountry);

    return (
        <main className="main">
            <h1 className="title"> 
                GUESS THE COUNTRY
            </h1>
            <div className="main__wrapper">
                {loading ? <Spinner/> : <View img={currentCountry.img} alt={currentCountry.alt} contryName={currentCountry.name} newOne={setNewOne} region={{setCurrentRegion, currentRegion}} currentCountry={currentCountry} />}
            </div>
        </main>
    )
}

const View = ({img, alt, contryName, newOne, region, currentCountry}) => {
    return (
        <>
            <div className="main__wrapper_img">
                <img src={img} alt={alt} />
            </div>
                <div>
                <InputField contryName={contryName} newOne={newOne} region={region} />
                <Hints currentCountry={currentCountry}/>
            </div>
        </>
    )
}

View.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    contryName: PropTypes.string.isRequired,
    newOne: PropTypes.func.isRequired,
    region: PropTypes.object.isRequired,
    currentCountry: PropTypes.object.isRequired
};

export default Guess;