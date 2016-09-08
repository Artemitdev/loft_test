
jQuery(document).ready(function() {
 $("input:checkbox").change(function(){
	if ($("#checkbox-js").filter(":checked").length)
		$(".course_items").addClass("submit");
		$(".course_items__img, .desc, field_complete").addClass("bg_done");
	});
});


