// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// NAV JAVA
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// ALERT JAVA
$(document).on('turbolinks:load',function(){
  console.log($(".alert")); // = test to see works in console
  $(".alert").delay(3000).fadeOut("slow");
});



// SIDE NAV JAVA
$(document).on("click", function(){

	$(".side-nav li a").click(function(){

		var selectedBeer = $(this).text();

		var beers = $("[data-prod-brewery]");

		beers.each(function(){

			if ($(this).attr("data-prod-brewery") === selectedBeer) {
				$(this).show()
			}
			else{
				$(this).hide();
			}
		});

		$("#beer-logo").removeAttr("class");
		$("#beer-logo").addClass("active");
		$("#beer-logo").addClass(selectedBeer.toLowerCase().replace(" ", "-"));	

	});

});
