interface Point{
	x:number,
	y:number
}

function drawPoint(obj:Point) {
	console.log(obj.x, obj.y);
}

drawPoint({
	x:1,
	y:2
})