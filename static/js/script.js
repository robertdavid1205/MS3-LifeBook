$(document).ready(function(){
    $(".sidenav").sidenav();
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
    $('.datepicker').datepicker({
      format: "dd mmmm, yyyy",
      yearRange: 100,
      showClearBtn: true,
      i18n:{
        done: "Select"
      }
    });
  });