//Navbar collapse on scroll
//function checkOffset() {
  //  $(".navbar-fixed-top").toggleClass("top-nav-collapse", $(".navbar").offset().top > 50);
//}


$(document).ready(function() {

    // Put your offset checking in a function
    function checkOffset() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("top-nav-collapse");
        }     
        else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }

    //When the page loads
    checkOffset();


    //Run when scrolling
    $(window).scroll(function() {
        checkOffset();
    });
});

//Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}