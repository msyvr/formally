import React from 'react'
import '../App.css'

const Field = ( props ) => {
    if(props.field.tag === 'input'){
        // render input fields that aren't conditional
        if(typeof(props.field.conditional)==='undefined' || props.conditionMet){
            return (
                <div className="Field" key={props.field.name}>
                    <div className="Field.div">
                        <label htmlFor={props.field.name}>{props.field.human_label}</label>
                    </div>
                    <div className="Field.div">
                        <input
                            type={props.field.type}
                            id={props.field.name}
                            name={props.field.name}
                            required={true}
                            disabled={props.disabled}
                            onChange={props.onChange}
                            value={props.value}
                        />
                    </div>
                </div>
            )
        }       
    }
    return (null)
}

export default Field;