// console.log("here")
var imgs = $("img");
var msg = "Hover over an image below."
console.log(imgs)
$.each(imgs, function(i,im){
	// console.log($(im).attr("src"))
	$(im).mouseover(function() {
		$('#image').css({ "background-image": "url('" + $(im).attr("src") + "')" });
		$('#image').text($(im).attr("alt"));
	})

	$(im).focus(function() {
		
		$('#image').css({ "background-image": "url('" + $(im).attr("src") + "')"});
	 	$('#image').text($(im).attr("alt"));
	})

	$(im).mouseleave(function() {
		$('#image').css({ "background-image": "url('')" });
		$('#image').text(msg);
	})

	$(im).blur(function() {
		$('#image').css({ "background-image": "url('')"});
	 	$('#image').text(msg);
	})
})
