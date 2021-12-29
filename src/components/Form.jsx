import React, {useState} from 'react'
import Field from './Field';
import Fields from './formdata.json';

// set constants
const minYears = 13;
const now = new Date();
const nowMinusMinYears = new Date(now.getFullYear()-minYears, now.getMonth(), now.getDate());
const alertMessage = 'Your information has been submitted.\nOne *big* step closer to your time off!\n\nData submitted:\n'

const Form = () => {
    // state to manage: form values, is date of birth?, condition met (age < 13)
    const [fieldValues, setFieldValues] = useState({
        "first_name":'', 
        "last_name":'',
        "email":'',
        "phone_number":'',
        "job_title":'',
        "date_of_birth":'',
        "parental_consent":false});
    const [conditionMet, setConditionMet] = useState(false)
    const [isDoB, setisDoB] = useState(false)
  
    const handleSubmit = (event) => {
        event.preventDefault();
        // log form data to console and render in an alert
        console.log(JSON.stringify(fieldValues, null, 2));
        alert(alertMessage + JSON.stringify(fieldValues,null,2))
    };

    const handleChange = (event) => {
        // check whether the Parental Consent field should be rendered (& required) per the date of birth value, then update state for form input values
        if (event.target.name === 'date_of_birth'){
            setisDoB(true);
            // validate age vs minimum years
            const dob = event.target.value;
            const dob_formatted = new Date(dob);
            if (dob_formatted > nowMinusMinYears) {
                setConditionMet(true);
            }
            else {
                setConditionMet(false);
            }
        }
        const value = (event.target.type === "checkbox" ? event.target.checked : event.target.value);
        setFieldValues({...fieldValues, [event.target.name]:value});
    };
    // iterate over field in Fields, passing props to Field component to render the form
    return (
        <form onSubmit={handleSubmit}>
            {Fields.map(field => {
                return(
                    <div key={field.name}>
                        <Field 
                        field = {field}
                        value = {fieldValues[field.name]}
                        onChange = {handleChange}
                        conditionMet = {conditionMet}
                        disabled = {((fieldValues[field.name]==='parental_consent') && isDoB) ? (conditionMet ? false : true) : false} />
                    </div>
                )}
            )}
            <button className='button' type='submit'>Submit</button>
        </form>
    )
}

export default Form;