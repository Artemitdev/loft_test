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
  $("input").click(function(event) {

  	if ($(".course_items .field_complete input").is(':checked')){
  		$(".course_items").addClass('submit bg_done');
  		$(".done").css("display", "block");
  		$(".courses").css("display", "none");

    setTimeout(function(){
    	$('.course_items').fadeOut('fast')
    },2000);
  	}
  })
});

// $("input").change(function(){
// 	this.checked&&($(".courses-item").removeClass("active"),
// 		$(this).closest(".courses-item").addClass("active"),setTimeout(function(){
// 			$(".courses-item.active").remove()
// 		},1e3),
// 		setTimeout(function(){$("*").hasClass("courses-item")||($(".courses-header").remove(),
// 			$(".complete").css("display","block")
// 			)},
// 		1e3))});




