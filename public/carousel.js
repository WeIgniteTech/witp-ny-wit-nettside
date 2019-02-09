function typeEffect(element, speed) {
    var text = $(element).text();
    $(element).html('');

    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            $(element).append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

$( document ).ready(function() {
    var speed = 75;
    var delay = $('h5').text().length * speed + speed;
    typeEffect($('h5'), speed);
    setTimeout(function(){
        $('p5').css('display', 'inline-block');
        typeEffect($('p5'), speed);
    }, delay);
});

//carousel slider autoplay start and stop on mousehover and mouseleave
var owl = $(".active");
owl.owlCarousel({
    loop:true,
    smartSpeed:450,
    responsiveClass: true,
    responsiveRefreshRate : 10,
    items:1,
});

$('.carousel-indicators li.carousel-indicators').on('mouseover',function(e){
    owl.trigger('play.owl.autoplay');
})
$('.carousel-indicators li.product').on('mouseleave',function(e){
    owl.trigger('stop.owl.autoplay');
})