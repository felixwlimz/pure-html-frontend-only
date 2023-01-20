const animationSpeed = 1000;
const pause = 2000;


let interval;

function startSlider(){
   interval = setInterval(function () {
        $('.slides > li:first').animate({
            width : 'toggle',
        }, 3000).next().appendTo('.slides');
    }, pause);  
}

$('.play').hide();

$('.pause').click(function () {
    clearInterval(interval);
    $(this).hide();
    $('.play').show();
})

$('.play').click(function () {
    startSlider();
    $(this).hide();
    $('.pause').show();
    
})

startSlider();

