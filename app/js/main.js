$(function(){
    
$('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable:false,
    
});
$('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable:false,
        arrows:false,
        fade:true,
});


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
// При нажатие на меню выходит список
$('.header__circle').on('click', function(){
     $('.menu__list').toggleClass('menu__list--active');
});
// При нажатие на крестик список скрывается
$('.menu__img').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
});
   
    
$('.select-style, .product-one__item-num').styler();
    
    
$('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        step: "0.01",
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

var mixer = mixitup('.products__content', {
    selectors: {
        control: '.products__btn'
    }
});
