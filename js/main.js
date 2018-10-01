//Header Backgroung on scroll
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('#nav-wrap').addClass('black');
    }
    else{
        $('#nav-wrap').removeClass('black');
    }
});

//Back on top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#go-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#go-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#go-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});




//Dropdown Menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}