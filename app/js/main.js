$(function(){
    
$('.shop-content__filter-btn').on('click', function() { 
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
        $(this).addClass('shop-content__filter-btn--active');
    });
    
$('.button-list').on('click', function (){
        $('.product-item').addClass('product-item--list')
    });
    
$('.button-grid').on('click', function (){
        $('.product-item').removeClass('product-item--list')
    });

$('.header__circle').on('click', function(){
     $('.menu-bar').toggleClass('menu-bar--active');
});

$('.menu-bar__img').on('click', function(){
    $('.menu-bar').toggleClass('menu-bar--active');
});
   
    
$('.select-style').styler();
    
    
$('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $( '.filter-price__from').text(data.from);
            $( '.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $( '.filter-price__from').text(data.from);
            $( '.filter-price__to').text(data.to);
        },
    })


$(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
  });

$(".product__items-star").rateYo({
    starWidth: "16px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
});


$('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 2000 
});


});

var mixer = mixitup('.design__items', {
    selectors: {
        control: '.design__btn'
    }
});

var mixer = mixitup('.product', {
    selectors: {
        control: '.products__btn'
    }
});
