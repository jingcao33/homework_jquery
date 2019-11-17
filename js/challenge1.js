$("document").ready(function(){
	$("#subscribe").click(function () {
		var checkBoxes = $("input[name=subscribe]");
		if (checkBoxes.prop("checked") == true){
			$("#emailField").css({ "display": "block" })
		} else {
			$("#emailField").css({ "display": "none" })
		}
	}); 
})
