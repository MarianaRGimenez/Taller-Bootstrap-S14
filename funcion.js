setInterval(function () {
    $('#textCarousel').carousel('next');
    if (!$('#textCarousel .carousel-item.active').next().length) {
        $('#textCarousel .carousel-item').first().addClass('active');
    }
}, 20);