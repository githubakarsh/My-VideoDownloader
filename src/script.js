var mp3Btn = document.getElementById('mp3');
var	mp4Btn = document.getElementById('mp4');
var URLinput = document.querySelector('.URL-input');
var server = 'http://localhost:4000';

mp3Btn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	redirectMP3MP4(URLinput.value, 3);
});


mp4Btn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	redirectMP3MP4(URLinput.value, 4);
});

function redirectMP3MP4(query, param) {
	window.location.href = `${server}/downloadmp${param}?url=${query}`;
}