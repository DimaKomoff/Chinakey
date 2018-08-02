$(function() {
    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            navText: [
                "<i style='font-size: 30px' class='fas fa-arrow-left'></i>",
                "<i style='font-size: 30px' class='fas fa-arrow-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $('#phone').mask('+38(999) 999-99-99');
    });
});
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate(
        {
            scrollTop: $($.attr(this, 'href')).offset().top
        },
        400
    );
    return false;
});
