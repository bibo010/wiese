var counter = {
	// wert sind default
	startA : 100,
	wertBB : 30, 
	plus: function (start, wertB) {
		var paul = start + wertB;
		return paul
	}

}


$('.btnTest').click(function(){
	counter.startA = 200;
	counter.wertBB = 35;

	console.log(counter.plus(counter.startA,counter.wertBB));
	
	erg = counter.plus(100,50);
	$('#paul')
	.html(erg)
	.attr('style','color:#000;font.weight:bold;background-color:red')
	.fadeOut(3000);


});


if ((typeof cityParam == 'undefined') && (cityParam != null) && (cityParam == true)) {
	cityParam = true;
	$('#varTest').html('hier true -> '+cityParam);
} else{
	cityParam = false;
	$('#varTest').html('hier false-> '+cityParam);
};
	$('#varTest1').html('ohne if-> '+cityParam);

