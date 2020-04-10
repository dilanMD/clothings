import React from 'react'
import './FormInput.scss'

const FormInput = ({ handleChange, label, ...inputProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...inputProps} />
            {
                label ?
                    (
                        <label
                            className={`form-input-label ${inputProps.value.length ? 'shrink' : ''}`}
                        >
                            {label}
                        </label>
                    ) : null
            }
        </div>
    )
}

export default FormInput