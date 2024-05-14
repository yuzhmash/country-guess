import { useState, useEffect } from "react";

const url = 'https://restcountries.com/v3.1/all';

const useCountriesServer = () =>  {

    const [data, setData] = useState([])

    const fetchCountryData = async () => {
        try {
            const res = await fetch(url);
            const countries = await res.json();
            const arr = countries.map(({ name, capital, languages, region, ccn3, flags }) => {
                return {
                    name: name.common,
                    capital: `${capital}`,
                    languages: languages ? Object.entries(languages)[0][1] : "no language", 
                    region, 
                    ccn3,
                    img: flags.svg,
                    alt: flags.alt
                }
            });
            setData(arr);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchCountryData();
    }, []);

    // console.log("hello");

    return {data}
}


export default useCountriesServer;


    // const getCountries = async (url) => {
    //     let res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }
    //     return await res.json();
    // }