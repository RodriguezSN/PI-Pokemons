export default function validate(input) {
	const regexNumeros = /\d+/;
	const regexSimbolos = /[^a-zA-Z0-9]+/;
	const regexSoloLetras = /^[a-zA-Z]+$/;
	const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;
	const errors = {};

	//? NAME
	if (input.name === "") errors.name = "name of your pokemon?";
	else {
		if (input.name.length <= 1) errors.name = "Min two characters";
		if (input.name.length > 30) errors.name = "Max 20 characters";
		if (regexNumeros.test(input.name)) errors.name = "Cannot contain Numbers";
		if (regexSimbolos.test(input.name)) errors.name = "Cannot contain Symbols";
	}
	//? IMAGE

	if (!regexURL.test(input.image)) errors.image = "URL no es valida";

	//? HP
	if (input.hp === 0 || input.hp === "") errors.hp = "indicates life";
	else {
		if (input.hp >= 1000) errors.hp = "HP max 999";
		if (regexSoloLetras.test(input.hp)) errors.hp = "Cannot contain Letters";
		if (regexSimbolos.test(input.hp)) errors.hp = "Cannot contain Symbols";
	}
	//? ATTACK
	if (input.attack === 0 || input.attack === "")
		errors.attack = "indicates the attack";
	else {
		if (input.attack >= 1000) errors.attack = "Attack max 999";
		if (regexSoloLetras.test(input.attack))
			errors.attack = "Cannot contain Letters";
		if (regexSimbolos.test(input.attack))
			errors.attack = "Cannot contain Symbols";
	}
	//? DEFENSE
	if (input.defense === 0 || input.defense === "")
		errors.defense = "indicates the defense";
	else {
		if (input.defense >= 1000) errors.defense = "Defense max 999";
		if (regexSoloLetras.test(input.defense))
			errors.defense = "Cannot contain Letters";
		if (regexSimbolos.test(input.defense))
			errors.defense = "Cannot contain Symbols";
	}
	//? SPEED
	if (input.speed === 0 || input.speed === "")
		errors.speed = "indicates the speed";
	else {
		if (input.speed >= 1000) errors.speed = "Speed max 999";
		if (regexSoloLetras.test(input.speed))
			errors.speed = "Cannot contain Letters";
		if (regexSimbolos.test(input.speed))
			errors.speed = "Cannot contain Symbols";
	}
	//? HEIGHT
	if (input.height === 0 || input.height === "")
		errors.height = "indicates the height";
	else {
		if (input.height >= 1000) errors.height = "Height max 999";
		if (regexSoloLetras.test(input.height))
			errors.height = "Cannot contain Letters";
		if (regexSimbolos.test(input.height))
			errors.height = "Cannot contain Symbols";
	}
	//? WEIGHT
	if (input.weight === 0 || input.weight === "")
		errors.weight = "indicates the weight";
	else {
		if (input.weight >= 1000) errors.weight = "HP max 999";
		if (regexSoloLetras.test(input.weight))
			errors.weight = "Cannot contain Letters";
		if (regexSimbolos.test(input.weight))
			errors.weight = "Cannot contain Symbols";
	}
	//? TYPE
	// if(input.typeId.length === 0 || input.typeId.includes("")) errors.typeId = "Tu pokemon debe pertener a algun type vale?"
	return errors;
}
