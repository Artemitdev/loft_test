/*(function(){
		var checkbox = document.querySelectorAll('input'),
				block = document.querySelectorAll('.course_items');

		var changeBackground = function(){
			if(this.checked == true) {
				block.classList.add('submit', 'bg_done');
			}
		};

		for ( var i = 0, len = checkbox.lenght; i < len; i++){
			checkbox[i].addEventListener('click', changeBackground, false);
		};

})();*/

$(function() {
  $(".course_items .field_complete input").click(function() {

  	if ($(".course_items .field_complete input").is(':checked')){
  		$(".course_items").addClass('submit bg_done');

    setTimeout(function(){
    	$('.course_items').fadeOut('fast')
    },1000);

  	}

  })
});




