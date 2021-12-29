import React from 'react'
import Form from './Form'
import '../App.css'

const FormAlly = () => {
    return (
        <>
            <div className="FormInstructions">
                <div>Please complete the form fields below...</div>
                <div>It'll be our pleasure to take care of the rest!</div>
            </div>
            <div className="Form">
                <Form />
            </div>
        </>
    )
}
    
export default FormAlly;