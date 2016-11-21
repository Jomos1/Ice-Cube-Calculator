var fkBoi = null
function skrub(one, two, tre){
	if (one == "add"){
		fkBoi = two + tre;
	}
	else if (one == "subtract"){
		fkboi = two * tre;
	}
	else if (one == "multiply"){
		fkboi = two * tre;
	}
	else if (one == "divide"){
		fkBoi = two / tre;
	}
	else console.log("I would say your aim is cancer, but cancer kills");
	console.log(fkBoi);
}

skrub("multiply", 23, 3)