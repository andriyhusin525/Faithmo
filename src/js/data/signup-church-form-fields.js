import countries from './countries.json'

let UsaStates = require('usa-states').UsaStates;
let usStates = new UsaStates();
let statesAbbreviation = usStates.arrayOf('abbreviations');

function getCountries(countries) {
    let data = []
    for (let key in countries) {
        data.push(key)
    }
    return data
}

export default {
    "first" : [
        {
            type: "text",
            required_type: "text",
            placeholder: "Church/Ministry Name",
            width: "full"
        },
        {
            type: "text",
            required_type: "text",
            placeholder: "Pastor Name",
            width: "full"
        },
        {
            type: "text",
            required_type: "email",
            placeholder: "Church Email Address",
            width: "full"
        },
        {
            type: "text",
            required_type: "url",
            placeholder: "Church Website (Optional)",
            width: "full"
        }
    ],
    "second": [
        {
            type: "text",
            required_type: "numbers",
            placeholder: "Church Phone Number",
            width: "full"
        },
        {
            type: "text",
            required_type: "text",
            placeholder: "Address 01",
            width: "full"
        },
        {
            type: "text",
            required_type: "text",
            placeholder: "Address 02",
            not_required: true,
            width: "full"
        },
        {
            type: "text",
            required_type: "text",
            placeholder: "City",
            width: "half"
        },
        {
            type: "select",
            required_type: "text",
            placeholder: "State",
            not_required: true,
            width: "half",
            values: statesAbbreviation,
        },
        {
            type: "text",
            required_type: "numbers",
            placeholder: "Zipcode",
            width: "half"
        },
        {
            type: "select",
            required_type: "text",
            placeholder: "Country",
            width: "half",
            values: getCountries(countries)
        },
    ],
    "third": [
        {
            type: "text",
            required_type: "text",
            placeholder: "First Name",
            width: "half"
        },
        {
            type: "text",
            required_type: "text",
            placeholder: "Last Name",
            width: "half"
        },
        {
            type: "text",
            required_type: "email",
            placeholder: "Personal Email Address",
            width: "full"
        },
        {
            type: "password",
            required_type: "password",
            placeholder: "Password",
            width: "full"
        },
        {
            type: "password",
            required_type: "re-password",
            placeholder: "Re-enter Password",
            width: "full"
        },
        {
            type: "select",
            required_type: "text",
            placeholder: "How did you find out about us?",
            width: "full",
            values: [
                'Search engine',
                'Recommended by friend',
                'Faithmo was mentioned in a Newspaper',
                'Faithmo was mentioned in a blog'
            ]
        },
        {
            type: "recaptcha",
            key: "6LezASoUAAAAAIrKXdLTcKA9E4nX6MtAPDKz8ETj"
        }
    ],
}
