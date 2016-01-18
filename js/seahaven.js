$(document).ready(function() {
  var pathname = window.location.pathname;
  var currentPage;
  switch (pathname) {
    case "/":
        $("#home").addClass('active');
        currentPage = "#home";
        break;
    case "/listen":
        $("#listen").addClass('active');
        currentPage = "#listen";
        break;
    case "/exhibitions":
        $("#exhibitions").addClass('active');
        currentPage = "#exhibitions";
        break;
    case "/merchandise":
        $("#merchandise").addClass('active');
        currentPage = "#merchandise";
        break;
    case "/contact":
        $("#contact").addClass('active');
        currentPage = "#contact"
        break;
  }

  $("#home").click(function(event) {
    $(currentPage).removeClass('active');
    $("#home").addClass('active');
  });

  $("#listen").click(function(event) {
    $(currentPage).removeClass('active');
    $("#listen").addClass('active');
  });

  $("#exhibitions").click(function(event) {
    $(currentPage).removeClass('active');
    $("#exhibitions").addClass('active');
  });

  $("#merchandise").click(function(event) {
    $(currentPage).removeClass('active');
    $("#merchandise").addClass('active');
  });

  $("#contact").click(function(event) {
    $(currentPage).removeClass('active');
    $("#contact").addClass('active');
  });

});