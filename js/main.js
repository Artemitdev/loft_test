
$(function(){
	$(".field_complete").click(function (event){
		var $target = $(event.target);
		var items = $(".course_items");
		for (var i = items.length; i >= 0; i--) {
			if ($target.is("input")){
				$target.closest(".course_items").addClass('submit bg_done');
				setTimeout(function(){
					$(".course_items.submit").remove();
					},1000);
			};
			// $(".courses").css("display", "none"),
			// $(".done").css("display", "block");
		};
	});
});




