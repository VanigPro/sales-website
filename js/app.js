var $form2 = $('#mc-embedded-subscribe-form-2')
if ($form2.length > 0) {
    $('.footer input[type="submit"]').bind('click', function(event) {
        if (event) event.preventDefault()
        $('.footer #mc-embedded-subscribe').val('Sending...');
        register($form2)
    })
}


$("#business-partners").slick({
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});



$("#token-sale-partners").slick({
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

$("#in-the-media").slick({
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 6,

    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});




$(".features-list").slick({
    autoplay: false,
    infinite: true,
    arrows: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }


    ]
});


$(".media-gallery").slick({
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 8,
    slidesToScroll: 8,


    responsive: [

        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }

    ]
});

$(".blog-post-col").slick({
    arrows: true,
    
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [

        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                speed: 300
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                dots: true
            }
        }

    ]
});



$(window).on('load', function() {
    $('.preloader').fadeOut('slow');
});

$(".vng-nav-mobile a").click(function() {
    $('#menu').prop('checked', false);
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= $('#solution').position().top) {
        $('.floating-widget').fadeIn("slow");
        if ((!$.cookie('close_email_optin')) && ($.cookie('cookieconsent_status'))) {
            $(".footer-widget").fadeIn("slow");

        }
    } else {
        $('.floating-widget').fadeOut("slow");

    }
});



$(function() {
    $('.blog-post-content h3').succinct({
        size: 50
    });
});

$('a[data-rel^=lightcase]').lightcase({
    maxHeight: 600,
    maxWidth: 900,
    swipe: true,
    transition: 'scrollRight'


});

$("nav a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        });
    } // End if
});

AOS.init({
    duration: 500,
    //once: true
});

$("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false

});
$("#accordion_v2").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false

});

$("#tabs").tabs();
$("#faqTabs").tabs();


var countdown_end = moment.tz("2018-06-04 00:00", "UTC");
$('#clock').countdown(countdown_end.toDate(), function(event) {
    $(this).html(event.strftime('' + '<li>%D<br><span>Days</span></li> ' + '<li>%H<br><span>Hours</span></li>' + '<li>%M<br><span>Minutes</span></li>' + '<li>%S<br><span>Seconds</span></li>'));
});




$(".footer-widget-close").click(function() {
    var date = new Date();
    var hours = 1;
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    var expires = "expires=" + date.toGMTString();

    document.cookie = "close_email_optin=true;" + expires;
    $('.footer-widget').css('display', 'none');

});



(function() {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm_share",
        b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q)
    }
})()