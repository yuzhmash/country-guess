import { useState, useRef, useEffect } from "react"
import PropTypes from 'prop-types';

import "./Hints.sass"

const Hints = ({currentCountry}) => {

    const [hints, setHints] = useState("")
    const [disabled, setDisabled] = useState(false)
    const prevCountry = useRef()

    useEffect(() => {
        if (prevCountry.current !== undefined && prevCountry.current !== currentCountry) {
            setDisabled(false)
            setHints("")
        }
        prevCountry.current = currentCountry;
    }, [currentCountry])

    const buttonsData = [
        {name: "get a capital", label: "capital"},
        {name: "get a languege", label: "langueges"},
        {name: "get a region", label: "region"}
    ]

    const handleClick = (e) => {
        switch (e.target.name) {
            case "capital":
                setHints({...hints, capital: currentCountry.capital})
                break;
            case "langueges":
                setHints({...hints, langueges: currentCountry.languages})
                break;
            default:
                setHints({...hints, region: currentCountry.region})
        }
        setDisabled(true)
    }
    
    const buttons = buttonsData.map(({name, label}, i) => {
        return (
            <div className="hints__wrapper" key={i}>
                <button 
                    className="hints__btns_btn" 
                    name={label}
                    onClick={(e) => handleClick(e)}
                    disabled={disabled && hints[label]}
                    >{name}</button>
                    <div className="hints__btns_hint">{disabled && hints[label]}</div>
            </div>
        )
    })

    return (
        <section className="hints">
            <h2 className="hints__title">
                need a hint?
            </h2>
            <div className="hints__btns">
                {buttons}
            </div>
        </section>
    )
}

Hints.propTypes = {
    currentCountry: PropTypes.shape({
        capital: PropTypes.string.isRequired,
        languages: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired
    }).isRequired,
};

export default Hints;