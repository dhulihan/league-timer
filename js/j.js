// JavaScript Document

$(document).ready(function(){
	var delay = 1;
	$("div.smite tr, div.timer_keeper").hover(function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
	});
	
	$("div.smite tr").click(function(){
		$("div.smite tr").removeClass("active");
		$(this).addClass("active").removeClass("hover");
	});
	
	$("div.timer_keeper").click(function(){
		var sec = $(this).attr("time");
		sec = sec - delay;
		$(this).find(".timer").attr("class","timer").countdown({until: +sec, compact: true, 
    layout: '{mn}{sep}{snn}', description: '', onTick: check, tickInterval : 1, onExpiry: liftOff});
	});
	
	$("div.timer_keeper").dblclick(function(){
		$(this).find(".timer").countdown('destroy').attr("class","timer").text("0:00");
		
	});
	function check(periods){
		if (periods[5] == 0 && periods[6] == 30){
			$(this).parent().effect("pulsate",500);
			$(this).addClass("crucial");
			if ($("#enablesounds:checked").val() == 1) $(this).parent().find("audio").get(0).play();
		}
	}
	function liftOff(){
		$(this).countdown('destroy').removeClass("crucial").addClass("up").text("UP");
	}
});