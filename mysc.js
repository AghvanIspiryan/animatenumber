$(document).ready(function(){


// $('li').click(function(){
//   $(this).addClass('active');
// })

// var $scroll = $(window).scrollTop();
// var $section = $('.section1').offset().top; 
// var $section2 = $('.section2').offset().top; 
// var $section3 = $('.section3').offset().top; 


$('nav li').click(function(){
  $('nav li').removeClass('active')
  $(this).addClass('active')
  var goToSection = '.s' + $(this).attr("id");
  $(' html').animate({
    scrollTop: $(goToSection).offset().top
  })

})
})





// $(document).ready(function() {
//   $('li').click(function() {
//     $('li').removeClass('active');
//     $(this).addClass('active');

//     var $section;
//     if ($(this).hasClass('click1')) {
//       $section = $('.section1').offset().top;
//     } else if ($(this).hasClass('click2')) {
//       $section = $('.section2').offset().top;
//     } else if ($(this).hasClass('click3')) {
//       $section = $('.section3').offset().top;
//     } else if ($(this).hasClass('click4')) {
//       $section = $('.section4').offset().top;
//     }

//     $('html, body').animate({
//       scrollTop: $section
//     }, 1000);
//   });
// });






// 'use strict';

// function change(){
// var $scroll = $(window).scrollTop();
// var $section = $('.section1').offset().top; 
// var $section2 = $('.section2').offset().top; 
// var $section3 = $('.section3').offset().top; 

// if($scroll == 0){
//   $('.click2').on('click', function(){
//     $section.$scroll
//   })
// }
// }

 $({counter: 0}).animate({counter: 95}, {
         duration:4000,
          easing:'linear',
          step:function(){
              $('.number').text(Math.ceil(this.counter))
          }
      })
  
  
  //     $({counter: 0}).animate({counter: 505}, {
  //         duration:3000,
  //         easing:'linear',
  //         step:function(){
  //             $('.number2').text(Math.ceil(this.counter))
  //         }
  //     })
  
  
  
  //     $({counter: 0}).animate({counter: 905}, {
  //         duration:2000,
  //         easing:'linear',
  //         step:function(){
  //             $('.number3').text(Math.ceil(this.counter))
  //         }
  //     })
