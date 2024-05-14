import { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';

import "./InputField.sass"

const InputField = ({contryName, newOne, region}) => {

    const [correct, setCorrect] = useState(true)
    const [currentValue, setCurrentValue] = useState("")
    const prevPropRef = useRef();

    useEffect(() => {
        prevPropRef.current = contryName;
    }, [contryName]);
    

    const onSubmited = (e) => {
        e.preventDefault()
        formik.resetForm()
        setCurrentValue("")
        newOne()
        setCorrect(true)
    }

    const formik = useFormik({
        initialValues: {
            name: currentValue,
            region: ""
        }, 
        validationSchema: Yup.string()
            .required("Обязательное поле!"),
        onSubmit: (values, {setFieldError}) => {
            if (contryName.toUpperCase() !== currentValue.toUpperCase()) {
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
                value={region.currentRegion}
                onChange={(e) => region.setCurrentRegion(e.target.value)}>
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
    contryName: PropTypes.string.isRequired,
    newOne: PropTypes.func.isRequired,
    region: PropTypes.object.isRequired
};

export default InputField;

