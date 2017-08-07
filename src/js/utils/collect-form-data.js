export default function collectFormData(values, data) {
    if (values === "user") {
        return {
            "displayname": data.get("First Name"),
            "name": data.get("First Name") + " " + data.get("Last Name"),
            "billingInfo": {
                "name": data.get("First Name") + " " + data.get("Last Name"),
                "address_line1": data.get("Address 01"),
                "city": data.get("City"),
                "province": data.get("State"),
                "postal_code": data.get("Zipcode"),
                "country": data.get("Country"),
                "email_address": data.get("Personal Email Address"),
                "phone_number": data.get("Church Phone Number")
            },
            "email": data.get("Personal Email Address"),
            "password": data.get("Password")
        }
    }
    else {
        return {
        	"name": data.get("Church/Ministry Name"),
            "description": data.get("Church/Ministry Name"),
            "billingAddress": {
                "name": data.get("Church/Ministry Name"),
                "address_line1": data.get("Address 01"),
                "city": data.get("City"),
                "province": data.get("State"),
                "postal_code": data.get("Zipcode"),
                "country": data.get("Country"),
                "email_address": data.get("Church Email Address"),
                "phone_number": data.get("Church Phone Number")
            },
            "website": data.get("Church Website (Optional)") ? data.get("Church Website (Optional)") : "",
            "twitter": ""
        }
    }
}
