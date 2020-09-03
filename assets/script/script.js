document.addEventListener('DOMContentLoaded', function() {
	var pack = document.querySelector('.slide_packImages');
	var item = document.querySelectorAll('.slide_item');
	var next = document.querySelector('.slide_next');
	var back = document.querySelector('.slide_back');

	back.addEventListener('click' , function () {
		pack.insertBefore(item[item.length -1], item[0]);
		item = document.querySelectorAll('.slide_item');
	});

	next.addEventListener('click' , function () {
		pack.appendChild(item[0]);
		item = document.querySelectorAll('.slide_item');
	});

});