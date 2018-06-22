$(function(){

  var menuOffset = $('.menu').offset();

  $(document).on('scroll',function(){
      var scrollTop = $(document).scrollTop();

      if (scrollTop > menuOffset.top){
          $('.menu').addClass('fixed');
      }else {
          $('.menu').removeClass('fixed');
      }
  });
});



    
  
   
       
  
       
           
       