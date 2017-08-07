export default function validation(values) {

    const errors = {};

    values.map((value) =>{
        switch(value.type) {
            case "numbers":
                errors[value.placeholder] = (!value.val || value.val === "")
                    ? (value.placeholder + ' field is required.' )
                    : (!/^[0-9]*$/.test(value.val) ? (value.placeholder + ' can only contain numbers.' ) : false )
            break;
            case "text":
                errors[value.placeholder] = (value.not_required !== true && (!value.val || value.val === ""))
                    ? (value.placeholder + ' field is required.' )
                    : (!/^[\w ]*$/.test(value.val) ? (value.placeholder + ' can only contain letters and numbers.' ) : false )
            break;
            case "email":
                errors[value.placeholder] = !value.val
                    ? ( value.placeholder + ' field is required.' )
                    : (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.val) ? 'Email format is invalid.' : false)
            break;
            case "url":
                errors[value.placeholder] = !value.val
                    ? false
                    : (!/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/.test(value.val) ? 'URL format is invalid.' : false)
            break;
            case "password":
                errors[value.placeholder] = !value.val
                    ? 'Password field is required.'
                    : (value.val.length < 8 ? (value.placeholder +' must be at least 8 characters long.') : false)
            break;
            default:
                errors
        }
    })

    // Collect passowrd fields.
    let pass
    let re_pass
    values.map((value) =>{
        if (value.type === "re-password") {
            re_pass = value
        }
        if (value.type === "password") {
            pass = value
        }
    })

    // Check re-password field.
    if (errors["Password"] === false) {
        if (re_pass.val === undefined) {
             errors[re_pass.placeholder] = re_pass.placeholder + ' field is required.'
        }
        else {
            if (re_pass.val !== pass.val) {
                errors[re_pass.placeholder] = "Please re-enter your password correctly."
            }
        }
    }

    return errors;

}
