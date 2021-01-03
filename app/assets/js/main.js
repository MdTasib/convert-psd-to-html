(function($){
    $(document).ready(function(){
        // owl-carousel slider iniialize
        $('.owl-carousel').owlCarousel({
            items: 1,   
            loop: true,
            dots:true,
            nav: true
        })
        $('.clients__area').owlCarousel({
            items: 4,
            loop: true,
            responsiveClass: true,
            nav: true,
            responsive: {
                0:{
                    items:1,
                    nav:true
                },
                480:{
                    items:2,
                    nav:false
                },
                680:{
                    items:3,
                    nav:false
                },
                980:{
                    items: 4,
                    nav:false
                }
            }
        })
        // progress circle initialize
        $('.circlechart').circlechart();
        // Scroll To Top initialize
        let scroll = $('.scroll'),
            scrollTop = $('#scrollTop');
        $(scrollTop).on('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
        window.addEventListener('scroll', () => {
            let position = document.documentElement.scrollTop;
            if ( 250 < position ) {
                scroll.addClass('scroll__active')
            }else {
                scroll.removeClass('scroll__active')
            }
        })
    })
}(jQuery))