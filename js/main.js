/*var btn = document.querySelector('button');
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
}*/



/*var tabs = document.querySelector('.tabs');

tabs.addEventListener('click', function(e){
	if(e.target.matches('.nav-link')){
		tabs.querySelectorAll('.nav-link').forEach(el=>{
			el.classList.remove('active');
		});
	tabs.querySelectorAll('.tab-list').forEach(el=> {
		el.classList.remove('active')
	});
	e.target.classList.add('.active');	
	tabs.querySelector(e.target.getAttribute('href')).classList.add('active')
	}
})*/

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
	}
}
