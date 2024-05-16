import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';

import useCountriesServer from "../../services/CountriesServer";

import "./InputField.sass"

const InputField = ({currentCountry, setCurrentCountry, filtredArr, setFiltredArr}) => {
    
    const [correct, setCorrect] = useState(true)
    const [currentValue, setCurrentValue] = useState("")
    const [currentRegion, setCurrentRegion] = useState("")

    const {getRandomCountry, getFiltredCountry} = useCountriesServer()

    const onFilter = (currentRegion) => {
        getFiltredCountry(currentRegion).then(data => setFiltredArr({name: data[0], num: data[1]}))
        setCurrentRegion(currentRegion)
    }
    

    const onSubmited = (e) => {
        e.preventDefault()
        formik.resetForm()
        setCurrentValue("")
        setCorrect(true)
        getRandomCountry(filtredArr.name, filtredArr.num).then(data => setCurrentCountry(data))
    }

    const formik = useFormik({
        initialValues: {
            name: currentValue,
            region: ""
        }, 
        validationSchema: Yup.string()
            .required("Обязательное поле!"),
        onSubmit: (values, {setFieldError}) => {
            if (currentCountry.name.toUpperCase() !== currentValue.toUpperCase()) {
                setFieldError("name", "incorrect")
                setCorrect(true)
            } else {
                setCorrect(false)
            }
        }
    })

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <input
                id="name" 
                type="text" 
                placeholder="what u think?"
                name='name'
                value={currentValue}
                onBlur={formik.handleBlur}
                onChange={(e) => setCurrentValue(e.target.value)}/>
            {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
            <select 
                id="region"
                name="region"
                value={currentRegion}
                onChange={(e) => {onFilter(e.target.value)}}>
                <option value="">choose a region</option>
                <option value="Europe">Eurupa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
            </select>
            <div className="form__btns" >
                <button type="submit" disabled={!correct}> try it!</button> 
                <button type="button" onClick={(e) => onSubmited(e)} disabled={correct}> next one</button>
            </div>
        </form>
    )
}

InputField.propTypes = {
    currentCountry: PropTypes.object,
    setCurrentCountry: PropTypes.func.isRequired,
    filtredArr: PropTypes.object.isRequired,
    setFiltredArr: PropTypes.func.isRequired
};

export default InputField;

