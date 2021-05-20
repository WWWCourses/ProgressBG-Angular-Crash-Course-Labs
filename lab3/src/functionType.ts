function foo(f: ()=>void):void {
	console.log("Greet will be called");
	f();
}


function callback() {
	console.log(`Hello `);
}


foo(callback);
// foo(2)// erorr must be raised