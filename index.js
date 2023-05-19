






$(document).on("scroll", function() {
    

    var $pageTop = $(document).scrollTop();
    var $pageBottom = $pageTop + $(window).height();
    
   
    var $cards = $('.card');
    var $contact = $('.contact-div');

    
    for (let i = 0; i < $cards.length; i++) {
        let card = $cards[i];
        
       if ($(card).position().top < $pageBottom) {
           $(card).addClass("visible");
       }
    }
    
    if ($($contact).position().top < $pageBottom) {
        $($contact).addClass("visible");
    }
});





$(".btn1").click(function(){
    $(".cc2,.cc3").addClass("test");
});

$(".btn2").click(function(){
    $(".cc1,.cc3").addClass("test");
});

$(".btn3").click(function(){
    $(".cc2,.cc1").addClass("test");
});


// $(".btn1").onclick(function(){
//     alert(x);
//     var $c1 = $('.c1');
//     $(c1).addClass("test");
    
// })

// function clicked(x){

//     // switch (x) {
//     //     case value:
            
//     //         break;
    
//     //     default:
//     //         break;
//     // }

