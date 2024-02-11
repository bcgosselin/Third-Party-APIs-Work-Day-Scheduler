$(document).ready(function() {
 
  getDate();
  
  function getDate() {
    const currentDate = new Date();
   
    $('#currentDay').text(currentDate);
  }

  $('.saveBtn').on('click', function saveUserInput() {
    var textContent = $(this).siblings('.description').val();
    var timeBlockId = $(this).parent().attr('id');
    
    localStorage.setItem(timeBlockId, textContent);
  });



  $(function () {

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// document.getElementById("btn saveBtn").addEventListener("click", saveUserText);

});