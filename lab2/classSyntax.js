/* -------------------------------------------------------------------------- */
/*                             Constructor Syntax                             */
/* -------------------------------------------------------------------------- */
// function Developer(name, skills) {
//     this.name = name;
//     this.skills = skills;
// }
// Developer.prototype.sayHello = function(){
// 	let skls = this.skills.toString();
// 	let hh= `Hello I am ${this.name}. My skills are: ${skls}.`
// 	console.log(hh);
// }

/* -------------------------------------------------------------------------- */
/*                                Class Syntax                                */
/* -------------------------------------------------------------------------- */
class Developer{
	constructor(name, skills){
		this.name = name;
    	this.skills = skills;
	}

	sayHello = function(){
		let skls = this.skills.toString();
		let hh= `Hello I am ${this.name}. My skills are: ${skls}.`
		console.log(hh);
	}
}


let pesho = new Developer('Petyr', ['JavaCript', 'HTML']);
let maria = new Developer('Maria', ['Python', 'Machine Learning']);

pesho.sayHello();
maria.sayHello();