$(document).ready(function() {{

	$('.nav li a').on('click',function(){
		$('#contentArea').ScrollTo({
		    duration: 800
		});
	});
	$('#contentArea .load_subcontent').on('click',function(){
		$('#subContentArea').ScrollTo({
		    duration: 800
		});
	});
	
	globalInit();
}});

$(window).resize(function() {
 	globalInit();
});

function globalInit(){
	var windowH = $(window).height();
	console.log(windowH)
	$('.section').height(windowH);
	
	
}