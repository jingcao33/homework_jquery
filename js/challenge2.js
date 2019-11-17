$(document).ready(function(){
	$("#useBilling").click(function () {
		var checkBoxes = $("input[name=useBilling]");
		if (checkBoxes.prop("checked") == true) {
			$("#home").val($("#billing").val())
			$("#home").prop("disabled", true)
		} else {
			$("#home").val("")
			$("#home").prop("disabled", false)
		}
	})
})