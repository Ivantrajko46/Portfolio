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
    //SCROLL ANIMATION FOR NAVBAR LINKS

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


    // PORTFOLIO PROJECTS HOVER
    $("div .projects").each(function(index, item) {   
        $(this).on('mouseover', function(e) {
            // let aboutProject = $(e.target.lastElementChild);
            $(item).addClass("animated");
            $(item).addClass("jello");
            // $(aboutProject).slideDown();
            // console.log($(this));

        });
        $(this).on('mouseout', function(e) {
            // let aboutProject = $(e.target.lastElementChild);
            $(item).removeClass("animated");
            $(item).removeClass("jello");
            // $(aboutProject).slideUp();


        });
    });
});