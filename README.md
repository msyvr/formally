### Use
To spin this React form builder up in your local environment:
- Fork the repo, save to your environment and cd to the app folder

`$ npm start`

NB:
- This was created as a basic react app, no additional package dependencies
- The example data is stored in file: formdata.json
    - Feel free to replace with other json form schema (no guarantees!)
- The user-input data is not stored/persisted. On form submit, it is logged to the console and posted to an alert.

### About formAlly
Dynamically generate forms from JSON data representing the form field schema. 
- The current functionality is tested for the example JSON data format and may not generalize to your JSON form schema data.

#### Specs
Implemented as a React app per requirements:

##### 1. From a JSON string of form data that describes the form fields, dynamically generate the form and render to the browser.

This code demonstrates the required functionality in conjunction with the sample JSON-ized data file.
-   Note: The jsx in the JSON file was wrapped in "" for consistency with the JSON format.

##### 2. Implement functionality to manage a conditionally rendered field, per input from another field.

The conditional element and the specific parameters of its conditionality determine whether it is rendered on the form. 
- I.e., the triggering input field is field.name = date_of_birth, and age < 13 triggers the render.

A general solution which extracts conditionality parameters/expressions directly from the object {conditional:{name:'...', show_if:'...'}} would be ideal (TO DO).

##### 3. Return or console.log the user-input form data to a JS object. 

On submit, form values are returned via console.log plus a user alert.

##### 4. Notes on field input validation and improving UI/UX beyond basic functionality; ideas for improvement.

CURRENT VERSION

- Fields are dynamically generated from JSON data structured as objects with multiple key-value pairs that collectively describe a form input field
    - a "tag" = "input" attribute is required to render as a form input
    - for objects/fields containing a "conditional" key, the current implementation checks for the value of key = "date_of_birth"; if a value exists and associates to user age < a minimum age (hard coded as 13 yrs), the conditional field is rendered and its input required

- All inputs are required for form submission
    - the example JSON data doesn't include this attribute
    - therefore, it is calculated from date of birth: 'required' is toggled off for conditions associated with not rendering the conditional field

NEXT STEPS / IMPROVEMENTS (not ordered/prioritized)

- Testing: unit and integration tests for a comprehesive set of possible field inputs and combinations, as well as a variety of JSON data.

- Accessibility: no accessibility features (yet!). These are critical.

- Guidance for filling in the form: Essentials up front (header or top of form) + 'info' buttons for detailed support for individual fields. 
    - An option to access further assistance (live chat, a forum, contact information,...) would be really nice, if available.

- Input validation: As is, all rendered fields are required, and the email and date fields have a minimal degree of built in validation. More comprehensive validation should include input validation with guidance/correction in real time (e.g., blocking 'future' DoBs, autocompleting email for common services). Units and formatting should be automatically flagged or, ideally, corrected inline (with user verification/approval).

- Privacy measures: option to mask the form/specific fields temporarily or by default

- User login + prepopulate form fields.

- Prompt the user verification of values prior to submission.

- Optimize responsive design for mobile.

- For longer forms, scroll-based rendering.

- An option to revisit the form to edit values would be a user-friendly feature; this may or may not make sense for the form owner so consider on a case by case basis.

- Design! Wanting to keep it light and not fiddle with a package, I used simple CSS flexboxes and a minimum of styling. Nicer design would make for a better experience!

- Notification (alert + email) including:

    - summary of submitted data
    
    - next steps/anticipated timeline
    
    - contact info for the entity collecting the data
    
    - confirm the specific purposes for which the data may be used

    - who else (if anyone) will receive and have access to the data provided
    
    - how the data will be stored (encrypted?, deleted after a certain period?, ...)

    - whether and how the user may withdraw the submitted data, or delete specific form data after submission
    
    - any required legal notices, potentially location-specific (state, country, ...)

- Clear the form on submission

- Maybe gamify the form or add an optional timer, or - for particularly long forms - cheer the user on as they progress

- ... the opportunities for improvement and creativity seem infinite!

---

#### Process notes

1. npx create-react-app formally

2. create components directory for app-specific components: field, form, formally

3. sample JSON string data saved to src/components/formdata.json

4. iterate over the JSON field schema, generating a field from each element

5. monitor browser events to identify input which triggers conditionality checks; handle appropriately

6. onSubmit: trigger capture of current browser input data, console.log + alert stringified data

---

App structure:

Formally: 
- Title/instruction text + Form container

Form: 
- Map JSON data to generic field elements generated via a Field component, taking into consideration conditionality

Field: 
- Generate generic field element; props passed from the Form component and value updates managed via React state and an event handler
