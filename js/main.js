document.addEventListener('DOMContentLoaded', function () {
  // здесь будет ваш код
  
  var btnMsg = document.getElementById('btn-msg');
  //1
  // btnMsg.addEventListener("click", function (){
  // 	alert("Show message");
  // });

  //2
 //  btnMsg.addEventListener('mouseover', backgroundBtn);
 //  btnMsg.addEventListener('mouseout', backgroundBtn);

 //  function backgroundBtn(e) {
 //  	if (e.type === 'mouseover') {
	//    	this.style.background = 'red';
	// } else if (e.type === 'mouseout') {
	//    	this.style.background = '';
	// }
 //  }

  //3
  // var tag = document.getElementById('tag'),
  // 	tagText = tag.innerHTML;

  // document.addEventListener('click', handler);
 
  // function handler (e){
  // 	tagText = tagText + ` ${e.target.tagName} `;
  // 	console.log(tagText);
  // }

  //4
  // var btnGenerate = document.getElementById('btn-generate'),
  // 	list = document.querySelector('ul'),
  // 	elemLi = document.querySelectorAll('ul li');

  // var event = new CustomEvent('event', {detail: {counter: elemLi.length + 1}});
  
  // list.addEventListener('event', newList);

  // function newList(){
  // 	var isLi = document.createElement('li'),
  // 		isLiText = document.createTextNode(`Item ${event.detail.counter++}`);
  // 	isLi.appendChild(isLiText);
  // 	list.appendChild(isLi);
  // }

  // btnGenerate.addEventListener('click', function(e){
  // 	e.preventDefault();
  // 	e.stopPropagation();
  // 	list.dispatchEvent(event);
  // })

  //5
  // var node = document.getElementsByTagName('li')[0],
  //   node1 = new SuperConstructor(node);
  // node1.event('hello', hendler);
  // function hendler(e){
  //   console.log("Hello!");
  // }
  // node1.event('hello');

});