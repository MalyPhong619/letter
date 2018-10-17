$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#story").show();
    $("#formOne").hide();
        var userName = $("#person1").val().toUpperCase();
        var userCity = $("#city").val().toUpperCase();
        var userstreet = $("#street").val().toUpperCase();
        var shouting = ("Hey stop what you're doing").toUpperCase();


        $("#userCity").text(userName);
        $("#userName").text(userCity);
       $("#userAddress").text(userstreet);
       $("#shout").text(shouting);

      // $("#userName").append("Alexander");
      // $("#userCity").append("Portand");
      // $("#userAddress").append("6th ave")
    });
});
