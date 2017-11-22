// document.write('working...');
// let heading = document.getElementsByTagName('tittle');
// heading.sheading.style.backgroundColor = 'blue'
// tyle.textAlign = 'center'
// heading.tittle = 'This is my site heading';
// 
// let elem = document.createElement('h2');
// elem.innerHTML = "All are welcome";
// let body = document.querySelector('body');
// body.appendChild(elem);
// console.log(elem);sssssss
let images = document.querySelectorAll('.thumbnails img')
let viewer = document.querySelector('.viewer');

let largeImg = document.createElement('img');
viewer.appendChild(largeImg);

let caption = document.createElement('p');
viewer.appendChild(caption);

// console.log(images);
images.forEach( function(image){
	image.onclick = function click(event) {
		// console.log(event.target);
		let img = event.target;
		//console.log(img);
		

		largeImg.src = img.src
		

		let captionText = img.getAttribute('data-caption');
		caption.innerHTML = captionText;
		// console.log(caption);
	}
})
