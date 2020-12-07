$(function(){
$('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01,
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


$('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000 
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




 