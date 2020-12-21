//main scroll event
$("#wrap").onepage_scroll({
    sectionContainer: "section",  
    easing: "ease",               
    animationTime: 700,
    pagination: false, 
    updateURL: false,
    beforeMove: function(index) {},
    afterMove: function(index) {}, 
    loop: false,                   
    keyboard: true,                 
    responsiveFallback: false,  
    direction: "vertical" 
});

//menu
$(function(){
    $('.title').click(function(){
        const sub = $(this).children('.sub_title');
        if( $(this).children('.sub_title').is(":visible") ){
            $(this).css({'color':'#351F66','background-color':'white'});
            sub.slideUp('slow');
        }else{
            sub.slideDown('slow');
            $(this,sub).css({'color':'white','background-color':'#351f66'});
        }
        if( $('.title').not(this).children('.sub_title').is(':visible')) {
            $('.title').not(this).children('.sub_title').slideUp();
            $('.title').not(this).css({'color':'#351F66','background-color':'white'});
        }
    });
});