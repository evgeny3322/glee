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
    "starSvg": "<svg  width="24" height="24" viewBox="0 0 24 24">"+
                 "<path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379"+
                           " 4.246-3.611-2.625-3.612 2.625"+
                           " 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833"+
                           " 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388"+
                           " 7.416 5.388-2.833-8.718"+
                           " 7.417-5.389h-9.167l-2.833-8.718z"></path>"+
                "</svg>"
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




 