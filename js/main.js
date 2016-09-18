// $(function(){

// 	var mainBlock = $(".course_items");
// 	var blockLenght = $(".course_items").lenght;
// 	var block = $(".field_complete");

// 	$(mainBlock).click(function (e){
// 		for (i = blockLenght; i > 0; i--){
// 			if ($("input").is(':checked')){
// 				$(mainBlock).addClass('submit bg_done').fadeOut(1000);
// 			} else if (i = 0){
// 					$(".courses").css("display", "none");
// 					$(".done").css("display", "block");
// 				};
// 		};
// 	});
// });

// $(function(){
// 	$(".course_items").click(function (e){
// 		var block = $(".course_items").length;
// 		var i = block;
// 		for (i; i > 0; i--){
// 			if ($("input").is(':checked')){
// 				$(this).addClass('submit bg_done').fadeOut(1000);
// 			} else if (i = 0){
// 					$(".courses").css("display", "none");
// 					$(".done").css("display", "block");
// 				};
// 		};
// 	});
// });

$(function(){
	$(".field_complete").click(function (event){
		var $target = $(event.target);
		if ($target.is("input")){
			$target.closest(".course_items").addClass('submit bg_done').fadeOut(1000);
		} else if ($(".course_items").css('display') !== 'block') {
				$(".courses").css("display", "none");
				$(".done").css("display", "block");
			}
	});
});





