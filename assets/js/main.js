$(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 250) {
            $(".navbar").css("background", "rgba(0,0,0,.85)");
            $(".navbar").css("boxShadow", "-4px 5px 15px #000");


        } else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("boxShadow", "");
        }
    });

    $("a.nav-item").click(function() {
        $("button.myToggler").trigger("click");
    });
    //SCROLL ANIMATION FOR NALBAR LINKS

    $(".navbar-nav a[href^='#").click(function(e) {
        e.preventDefault(); //

        var target = this.hash;
        var $target = $(target);

        $("html, body").animate({
            scrollTop: $target.offset().top
        }, 1000, );

    });
    // BACK TO TOP ARROW
    $('#top i.fas').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    // PROGRESS BAR HOVER
    $('#skills').mouseover(function(e) {
        $('div.progress-bar[aria-valuenow="80"]').css("width", "80%");
        $('div.progress-bar[aria-valuenow="70"]').css("width", "70%");
    });
    $('#skills').mouseout(function(e) {
        $('div.progress-bar[aria-valuenow="80"]').css("width", "");
        $('div.progress-bar[aria-valuenow="70"]').css("width", "");
    });

    // PORTFOLIO PROJECTS HOVER
    $("div .projects").each(function(index, item) {
        $(this).on('mouseover', function(e) {
            $(item).addClass("animated");
            $(item).addClass("jello");

        });
        $(this).on('mouseout', function(e) {
            $(item).removeClass("animated");
            $(item).removeClass("jello");


        });
    });




});