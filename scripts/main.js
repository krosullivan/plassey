$(document).ready(function() {{
	
	var scrollDur = 800;
	
	$('.nav li a').on('click',function(){
		$('#contentArea').ScrollTo({
		    duration: scrollDur
		});
	});
	$('#home .load_content_area').on('click',function(){
		$('#contentArea').ScrollTo({
		    duration: scrollDur
		});
	});
	$('#contentArea .load_subcontent').on('click',function(){
		$('#subContentArea').ScrollTo({
		    duration: scrollDur
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