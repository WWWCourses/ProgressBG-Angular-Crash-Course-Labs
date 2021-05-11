// Define class Developer:
// with next properties:
// 		name: String
// 		skills: Array
// and methods:
// 		sayHello()

function Developer(name, skills) {
	this.name = name;
	this.skills = skills;
}


let pesho = new Developer('Petyr', ['JavaCript', 'HTML']);
let maria = new Developer('Maria', ['Python', 'Machine Learning']);
pesho.sayHello();
maria.sayHello();

// Expected Output:
// Hello, I'm Petyr. My skills are: 'JavaCript', 'HTML'
// Hello, I'm Maria. My skills are: 'Python', 'Machine Learning'