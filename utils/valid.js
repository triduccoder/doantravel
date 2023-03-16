const valid = (name, email, password, cf_password) =>{
	if(!name || !email || !password){
		return "Please add all fields."
	}

	if(!validateEmail(email)){
		return "Invalid email"
	}
	// co the 4 or 6
	if(password.length < 4){
		return "password must be at least 4 characters!"
	}

	if(password !== cf_password){
		return "confirm password did not match"
	}
}

function validateEmail(email) 
{
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}


export default valid