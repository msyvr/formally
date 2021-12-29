### Use
To spin this React form builder up in your local environment:
- make sure you have javascript, node, npm, react installed
- fork the repo, save to your environment and cd to the app folder
- npm start
- example data in formdata.json: feel free to replace with other json form schema (no guarantees!)

NB! The data is not persisted anywhere, only logged to the console and posted to an alert on submit.

### About formAlly
Dynamically generate forms from JSON data representing the form field schema. The current functionality is tested for the example JSON data format and may not generalize to your JSON form schema data.

#### Specs
Implemented as a React app:

1. From a JSON string of form data that describes the form fields, dynamically generate the form and render to the browser.

##### This code works as intended with the sample JSON-ized data file. (The jsx in the JSON file was wrapped in "" for consistency with the JSON format.)

2. Implement functionality to manage a conditionally rendered field, per input from another field.

##### The conditional element and the specific parameters of its conditionality trigger whether it is rendered on the form. I.e., the triggering input field is field.name = date_of_birth, and age < 13 triggers the render.

##### A general solution which extracts values from the object {conditional:{name:'...', show_if:'...'}} would be ideal (TO DO).

3. Return or console.log the user-input form data to a JS object. 

##### On submit, console.log plus an alert for the user. The alert text is not formatted.

4. Notes on field input validation and improving UI/UX beyond basic functionality; ideas for improvement.

##### CURRENT VERSION

- All inputs are required for form submission. The JSON data doesn't include this attribute, so it's calculated based on the date of birth value and toggles the conditional field.

- The required attribute of the conditionally rendered element is dynamic: if rendered, the element is required; if not rendered, it's not required. 

##### NEXT STEPS / IMPROVEMENTS

- Testing: unit and integration tests for a comprehesive set of possible field inputs and combinations, as well as a variety of JSON data.

- Accessibility: no accessibility features (yet!). These are critical.

- Guidance: Basic instructions up front (header or top of form), or as info buttons associated with specific fiedls. An option to get assistance (live chat, a forum, ...) or clarification would be really nice. 

- Input validation: All rendered fields are required, and the email and date fields have a minimal degree of built in validation. More comprehensive validation could include input guidance/correction in real time (e.g., blocking DoBs in the future, or autocompleting email for common services). Units and formatting should be automatically flagged or, ideally, corrected (with user verification/approval).

- Privacy measures such as an option to mask the form temporarily or mask specific fields by default (with a view option for the user to display by choice).

- Enable user to login and prepopulate form fields with prior data. Also, prompt the user to check their inputs prior to submission (formatted alert?).

- Optimize for mobile.

- For longer forms, scroll-based rendering - both to help the task feel less overwhelming, and also to help focus the current input fields.

- An option to revisit the form to edit values would be a user-friendly feature; this may or may not make sense for the form owner so consider on a case by case basis.

- Design! Wanting to keep it light and not fiddle with a package, I used simple CSS flexboxes and a minimum of styling. Nicer design would make for a better experience!

- Notification (alert on submission plus via email) of:

    - summary of submitted data with next steps/anticipated timeline
    
    - contact info for the entity collecting the data and for what purposes they may use the data

    - who else (if anyone) will receive and have access to the data provided, and how it will be stored (encrypted?, deleted after a certain period?, ...)

    - whether and how the user may withdraw the submitted data, or delete specific form data after submission
    
    - any required legal notices, potentially location-specific (state, country)

- Clear the form on submission, or somehow indicate it's no longer 'live'? 

- Maybe gamify the form or add an optional timer, or - for particularly long forms - cheer the user on as they progress

- ... the opportunities for improvement and creativity seem infinite!

---

#### Process notes

1. npx create-react-app formally

2. create components directory for app-specific components: field, form, formally

3. sample JSON string data saved to src/components/formdata.json (probably shouldn't be in the components folder - not sure about best practice)

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
