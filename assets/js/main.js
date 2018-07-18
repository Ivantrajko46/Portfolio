$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar").css("background", "rgba(0,0,0,.8)");
            $(".navbar").css("boxShadow", "-4px 5px 15px #000");

       
        } else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("boxShadow", "");
        }
    });


    
    $('#skills').mouseover(function(e){
    	$('div.progress-bar[aria-valuenow="80"]').css("width", "80%");
    	$('div.progress-bar[aria-valuenow="70"]').css("width", "70%");
    });
    $('#skills').mouseout(function(e){
    	$('div.progress-bar[aria-valuenow="80"]').css("width", "");
    	$('div.progress-bar[aria-valuenow="70"]').css("width", "");
    });

    $("a.nav-item").click(function(){
    	$("button.myToggler").trigger("click");
    });
});