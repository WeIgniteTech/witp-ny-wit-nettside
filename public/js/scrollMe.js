'use strict';
//Check for jQuery 
/*
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
} */

(function ($) {
    $(document).ready(function () {
        
        //Hide navbar first
    $('.navscroll').hide();
        
        //Hide courseUpdates first
    $('.courseUpdates').hide();
        
        //fadeIn navbar
    $(function () {
            $(window).scroll(function(){
                
                //Hvor lang skal man scrolle før fadeIn
                if($(this).scrollTop() > 80){
                    $('.navscroll').fadeIn();
                    $('.courseUpdates').fadeIn();
                    
                } else {
                    $('.navscroll').hide();
                    $('.courseUpdates').fadeOut();
                }            
            });
        });
});
    
    
}(jQuery)); 
/*Show after 20px scroll down*/
/*    
window.onscroll=function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 ||
 document.documentElement.scrollTop > 20){
        document.getElementsByClassName("courseUpdates").style.display =
    "block";
    } else{
        document.getElementsByClassName("courseUpdates").style.display =
    "none";
    }
} */