window.onload = function() {
    var image = document.querySelector('.banner__img__parallax');
    image.style.height = '600px'; /* Adjust this value to match your image's height */
  };
  // ========================Nature parallax=========
// --------------Orange-------------
  window.addEventListener('scroll', function() {
    var orange = document.querySelector('.orange');
    var scrollPosition = window.pageYOffset;
    var imageOffset = orange.offsetTop;

    if (scrollPosition + window.innerHeight > imageOffset) {
      orange.style.left = '0';
    }
  });
// --------------lemon-------------
// window.addEventListener('scroll', function() {
//   var lemon = document.querySelector('.lemons');
//   var scrollPosition = window.pageXOffset;
//   var imageOffset = lemon.offsetTop;

//   if (scrollPosition + window.innerWidth > imageOffset) {
//     lemon.style.left = '0';
//   }
// });

// --------------almonds-------------
window.addEventListener('scroll', function() {
  var almond = document.querySelector('.almonds');
  var scrollPosition = window.pageYOffset;
  var imageOffset = almond.offsetTop;

  if (scrollPosition + window.innerHeight > imageOffset) {
    almond.style.top = '0';
  }
});


// --------------bohnen-------------

// =============discount Timer===========
    // Set the date and time to count down to
    const countdownDate = new Date("2023-12-31T23:59:59").getTime();

    // Update the countdown every second
    const countdown = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown in separate boxes
      document.getElementById("days").innerHTML = days+"<br>"+"Days";
      document.getElementById("hours").innerHTML = hours +"<br>"+"Hours";
      document.getElementById("minutes").innerHTML = minutes+"<br>"+"Minutes";
      document.getElementById("seconds").innerHTML = seconds+"<br>"+"Seconds";

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("discount__timer").innerHTML = "Countdown finished!";
      }
    }, 1000);



    $(function(){

      $(".bot_top").click(function(){
          $("body,html").animate({scrollTop:0},300)
      })
  
      // we can use both way 1. changing css  OR 2. using FadeIN+ FadeOut
      // 
      $(window).scroll(function(){
          let scroll= $(this).scrollTop()
          if(scroll>800){
              $(".bot_top").css(
                  "display","block"
              )
          }
          else{
              $(".bot_top").css(
                  "display","none"
              )
          }
      })
  
      // $(window).scroll(function(){
      //     let scroll= $(this).scrollTop()
      //     if(scroll>300){
      //         $(".bot_top").fadeIn(500)
          
      //     }
      //     else{
      //         $(".bot_top").fadeOut(500)
      //     }
      // })
  }
  );


