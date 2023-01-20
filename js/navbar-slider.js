let maxWidth = 768;



$(window).on('resize', function(){
   
    console.log($(window).width());
    
  

    if ($(window).width() <= maxWidth){
      $('.side-nav-menu').hide();
           $('#nav-toggle').on('click', function (e) {
             $('.side-nav-menu').toggle();           
           });
           $('.nav-items').click(function(){
              $('.side-nav-menu').hide();
           });
        
        }
       else {
      $('.side-nav-menu').show();
    }

});



