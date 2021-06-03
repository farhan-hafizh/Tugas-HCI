function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var templateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var pass = document.getElementById("password").value;
    var acc = document.getElementById("terms");

    if(document.getElementById("terms").checked){
        if (name != '' && email != '' && pass != '') {
            if (email.match(templateEmail)) {
                if (document.getElementById("male").checked || document.getElementById("female").checked) {
                    if (pass.length >= 6 && pass.length <=15) {
                        alert("You have finish registration.");
                        return true;
                    } else {
                        alert("Password must be at least 6 characters and not exceed 15 characters!");
                        return false;
                    }
                } else {
                    alert("You must select gender!");
                    return false;
                }
            } else {
                alert("Invalid Email Address!");
                return false;
            }
        } else {
            alert("All fields are required!");
            return false;
        }
    }
    else{
        alert("You need to Accept terms and condition")
        return false;
    }

    // if(name == ''){
    //     alert("You need to fill Your Name");
    //     return false;
    // }
    // if(!email.match(templateEmail)){
    //     alert("Invalid Email Address");
    //     return false;
    // }
    // if(pass != ''){
    //     if(pass.length < 6){
    //         alert("Password length must be atleast 6 characters");
    //         return false;
    //     }
    //     else if (pass.length > 15){
    //         alert("Password length must not exceed 15 characters");
    //         return false;
    //     }
    // } else{
    //     alert("Fill Your Password");
    //     return false;
    // }

    // if(!document.getElementById("male").checked && !document.getElementById("female").checked){
    //     alert("You need to choose Your Gender");
    //     return false;
    // }
}