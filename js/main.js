var btn = document.querySelector('button');
var text = document.querySelector('input');
var list = document.querySelector('.tlist');
var remove = document.querySelector('p>span');


btn.addEventListener('click', function() {
	list.innerHTML = list.innerHTML  + '<p>' + text.value + '<span class="glyphicon glyphicon-trash">'
	+ '</span>' + '</p>';
	text.value = "";
});


list.onclick = function(e){
   var el = e.target;
   if (el.matches('p>span')) el.closest('p').remove();
}


var modal = document.querySelector('.modal_block');
var btnModal = document.querySelector('#btn_modal');
var close = document.querySelector('.modal_text>span');

btnModal.onclick = function(){
	modal.style.display = "block";
}
close.onclick = function(){
	modal.style.display = "none"
}
window.onclick = function(e){
	if(e.target == modal){
	modal.style.display = "none"
	};
};

var tabs = document.querySelector(".tab");
tabs.addEventListener('click',function(event){
	if(event.target.matches('.nav_link')){
		tabs.querySelectorAll('.nav_link').forEach(el=> {
			el.classList.remove('active')
		});
		tabs.querySelectorAll('.tab_content').forEach(el=> {
			el.classList.remove('active')
		});

		event.target.classList.add('active');
		var selector = event.target.getAttribute('href');
		tabs.querySelector(selector).classList.add('active');
	}
})

var nul = 0;
document.querySelector(".game").onclick = function(event) {
	if(event.target.className == 'game_item'){
		if(nul%2==0){
			event.target.innerHTML = 'X';
		}
		else {
			event.target.innerHTML = 'O';
		}
		nul++;
		win()

	}

}
function win () {
	var item = document.querySelectorAll('.game_item');
	
	if(item[0].innerHTML=='X'&& item[1].innerHTML=='X' && item[2].innerHTML=='X') alert('X - WIN');
	if(item[3].innerHTML=='X'&& item[4].innerHTML=='X' && item[5].innerHTML=='X') alert('X - WIN');
	if(item[6].innerHTML=='X'&& item[7].innerHTML=='X' && item[8].innerHTML=='X') alert('X - WIN');
	if(item[0].innerHTML=='X'&& item[3].innerHTML=='X' && item[6].innerHTML=='X') alert('X - WIN');
	if(item[1].innerHTML=='X'&& item[4].innerHTML=='X' && item[7].innerHTML=='X') alert('X - WIN');
	if(item[2].innerHTML=='X'&& item[5].innerHTML=='X' && item[8].innerHTML=='X') alert('X - WIN');
	if(item[0].innerHTML=='X'&& item[4].innerHTML=='X' && item[8].innerHTML=='X') alert('X - WIN');
	if(item[2].innerHTML=='X'&& item[4].innerHTML=='X' && item[6].innerHTML=='X') alert('X - WIN');

	if(item[0].innerHTML=='O'&& item[1].innerHTML=='O' && item[2].innerHTML=='O') alert('O - WIN');
	if(item[3].innerHTML=='O'&& item[4].innerHTML=='O' && item[5].innerHTML=='O') alert('O - WIN');
	if(item[6].innerHTML=='O'&& item[7].innerHTML=='O' && item[8].innerHTML=='O') alert('O - WIN');
	if(item[0].innerHTML=='O'&& item[3].innerHTML=='O' && item[6].innerHTML=='O') alert('O - WIN');
	if(item[1].innerHTML=='O'&& item[4].innerHTML=='O' && item[7].innerHTML=='O') alert('O - WIN');
	if(item[2].innerHTML=='O'&& item[5].innerHTML=='O' && item[8].innerHTML=='O') alert('O - WIN');
	if(item[0].innerHTML=='O'&& item[4].innerHTML=='O' && item[8].innerHTML=='O') alert('O - WIN');
	if(item[2].innerHTML=='O'&& item[4].innerHTML=='O' && item[6].innerHTML=='O') alert('O - WIN');
	}