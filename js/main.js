$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('header').addClass('header2 .preheader');
        } else {
            $('header').removeClass('header2 .preheader')
        }
    });
    
});

$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('line').addClass('linenone');
        } else {
            $('line').removeClass('linenone')
        }
    });
    
});