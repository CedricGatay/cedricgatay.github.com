function init() {
    $("#content").css({opacity:0});
    $("#footer").css({opacity:0});

    $("#overlay-card").css({
        display : "block",
        opacity : "0.0"
    });

    $(".section ul li").each(function() {
        $(this).click(function() {
            window.location = ($(this).children("a").attr("href"));
        });
    });


    var queryhash = window.location.hash;
    if (queryhash == ""){
        queryhash = "#about";
    }
    $('#mask').scrollTo(queryhash, 0);
    var panelheight = $(queryhash).height();
    $('#main').animate({'height':panelheight}, {queue:false, duration:800});

    $(document.body).scrollTo(0);
    $("#menu li a").bind("click", function(e) {
    	e.preventDefault();

        var dest = $(this).attr('href');

        $(document.body).scrollTo(0, 0);
        var panelheight = $(dest).height();
        $("#menu li a").removeClass("selected");
        $(this).addClass('selected');
        $('#main').animate({'height':panelheight}, {queue:false, duration:800});
        $('#mask').scrollTo($(dest), 800, {onAfter : function(){window.location.replace(dest);}});

    });

    $("#content").animate({opacity:1}, 1000);
    $("#footer").animate({opacity:1}, 5000);
};

var make = {

    slideDown : function() {
        $(this).animate({
            top : '28px'
        }, 100);
        $('#overlay-card').fadeTo('fast', 1.0);
    },
    slideUp : function() {
        $(this).animate({
            top : '24px'
        }, 100);
        $('#overlay-card').fadeTo('fast', 0.0);
    }
};