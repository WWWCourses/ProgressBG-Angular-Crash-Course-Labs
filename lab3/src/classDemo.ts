class Person {
	name:string

	constructor(public firstName: string, public surName: string) {
		// no need for: this.firstName = firstName
		this.name = `${this.firstName} ${this.surName}`
	}
}