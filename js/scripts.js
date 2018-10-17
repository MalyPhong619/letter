$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#story").show();
    $("#formOne").hide();
        var userName = $("#person1").val();
        var userCity = $("#city").val();
        var userstreet = $("#street").val();

        $("#userCity").text(userName);
        $("#userName").text(userCity);
       $("#userAddress").text(userstreet);

      // $("#userName").append("Alexander");
      // $("#userCity").append("Portand");
      // $("#userAddress").append("6th ave")
    });
});
