let arr = [
	"./assets/images/trab.jpg",
	"./assets/images/trab1.jpg",
	"./assets/images/trab2.jpg",
	"./assets/images/trab3.jpg",
	"./assets/images/trab4.jpg",
	"./assets/images/trab5.jpg",
	"./assets/images/trab6.jpg",
	"./assets/images/trab7.jpg",
	"./assets/images/trab8.jpg",
	"./assets/images/trab9.jpg",
	"./assets/images/trab9.jpg"
]

let img = document.getElementById("img");
let i = 0;

console.log(arr.length);

if(i < arr.length -1){
	i++;
	arr[i];
}
console.log(arr[i]);

function next(){

	i--;
	if(i < 0){
		i = arr.length -1;
		
	}
	img.src = arr[i];
	
}

function back(){
	i++;

	if(i >= arr.length){
		i = 0;
	}
	img.src = arr[i];
	
}