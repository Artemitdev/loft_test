$(function(){
	
	$(".course_items").click(function (e){
		var block = $(".course_items").length;
		for (i = block; i > 0; i--){
			if ($("input").is(':checked')){
				$(this).addClass('submit bg_done').fadeOut(1000);
			} else if (i = 0){
					$(".courses").css("display", "none");
					$(".done").css("display", "block");
				};
		};
	});
});





