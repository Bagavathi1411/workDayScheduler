$(document).ready(function () {
  var hour = moment().hours();

  function getDate() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }

  function colorSchedule() {
    $("input").each(function () {
      var r_Hour = $(this).attr("id");
      var r_Number = parseInt(r_Hour);
      if (r_Number === hour) {
        $(this).addClass("present");
      } else if (r_umber < hour) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
    });
  }

  function renderStoredInputs() {
    $(".event").each(function () {
      var inputId = $(this).attr("id");
      $(this).val(localStorage.getItem(inputId));
    });
  }

  $(".saveBtn").click(function () {
    var scheduleInputs = $(this).siblings(".event").val();
    var inputsLocation = $(this).siblings(".event").attr("id");
    localStorage.setItem(inputsLocation, scheduleInputs);
  });

  setInterval(getDate, 1000);
  colorSchedule();
  setInterval(colorSchedule, 1000);
  renderStoredInputs();
});
