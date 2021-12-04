$(document).ready(function(){
   
    $("a").click(function(){
       var numeral= this.hash 

       $("html, body").anime(
           {
               scrollTop:$(numeral).offset().top 
       },
       1000
       )

    })
})


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })




  $( ".card-title" ).click(function() {
    $( ".card-text" ).toggle(  function() {
      // Animation complete.
    });
  });
