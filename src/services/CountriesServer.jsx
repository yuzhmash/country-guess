import { useHttp } from "../hooks/http.hooks";


const useCountriesServer = () =>  {

    const {loading, error, request, clearError} = useHttp()

    const _apiBase = 'https://restcountries.com/v3.1/all';


    const getAllCoutries = async () => {
        const res = await request(_apiBase);
        return res.map(_transformCharacter)
    }


    const getRandomCountry = async (filData, n = 250) => {
        const res = await request(_apiBase);
        if (typeof filData === "string") {
            const num = Math.floor(Math.random() * 250)
            console.log("u here");
            return _transformCharacter(res[num])
        } else {
            const num = Math.floor(Math.random() * n)
            return filData[num]
        }
    }

    const getFiltredCountry = async (currentRegion) => {
        const res = await request(_apiBase);
        if (!currentRegion.length) {
            return [res.map(_transformCharacter), res.length]
        }
        const data = res.filter((data) => data.region === currentRegion)
        return [data.map(_transformCharacter), data.length]
    }


    const _transformCharacter = (data) => {
        return {
            name: data.name.common,
            capital: `${data.capital}`,
            languages: data.languages ? Object.entries(data.languages)[0][1] : "no language", 
            population: data.population,
            region: data.region, 
            ccn3: data.ccn3,
            img: data.flags.svg,
            alt: data.flags.alt
        }
    }

    return {getRandomCountry, getFiltredCountry, getAllCoutries, loading, error}
}


export default useCountriesServer;