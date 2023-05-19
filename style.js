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




$(document).on("click", function(event){
    var clsname = event.target.id;
    // alert(clsname);
    if (clsname=="B1") {
        $(".cc2,.cc3").addClass("test");
        $('.cc2', '.cc3').prop('disabled', true);       
    }
    else if (clsname=="B2") {
        $(".cc1,.cc3").addClass("test");
        $('.cc1', '.cc3').prop('disabled', true);       
    }
    else if (clsname=="B3") {
        $(".cc1,.cc2").addClass("test");
        $('.cc1', '.cc2').prop('disabled', true);       
    }
  });

$(document).on("click", function(event){
    var clsname = event.target.id;
    // alert(clsname);
    if (clsname=="BB1") {
        $(".c22,.c33").addClass("test");
        $('.c22', '.c33').prop('disabled', true);       
    }
    else if (clsname=="BB2") {
        $(".c11,.c33").addClass("test");
        $('.c11', '.c33').prop('disabled', true);       
    }
    else if (clsname=="BB3") {
        $(".c11,.c22").addClass("test");
        $('.c11', '.c22').prop('disabled', true);       
    }
  });
