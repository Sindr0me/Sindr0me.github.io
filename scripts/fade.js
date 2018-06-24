
$(document).ready(function(){
    
    $("#icons").slideToggle(500);
    $("#body").fadeIn(1500);
});


$("#tab1").click(function(){
    $("#tab-content1").fadeOut(0);
    $("#tab-content1").fadeIn(500);
});

$("#tab2").click(function(){
    
    $("#tab-content2").fadeOut(0);
    $("#tab-content2").fadeIn(500);
 
});

$("#tab3").click(function(){
    $("#tab-content3").fadeOut(0);
    $("#tab-content3").fadeIn(500);
});