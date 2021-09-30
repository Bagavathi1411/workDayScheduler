$(document).ready(function ()
{
var hour = moment().hours();

  function getDate() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  };

  function colorData() {
    $("input").each(function () {
      var r_Hour = $(this).attr("id");
      var r_Number = parseInt(r_Hour);
      if (r_Number === hour) {
        $(this).addClass("present");
      } else if (r_umber < hour) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      };
    });
  });