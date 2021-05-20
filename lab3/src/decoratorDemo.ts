// create a decorator
function logDecor(f: ()=>void){
	return function(){
		console.log(`{{{{{{{{{{{{{{{{{{{{{{{`);
		f()
		console.log(`}}}}}}}}}}}}}}}}}}}}}}}`);
	}
}

//a function, to be decorated:
// @logDecor()
let greet = function(){
	console.log(`Howdy!`);
}


// decorate the function:
greet = logDecor(greet)


// use the decorated function
greet()