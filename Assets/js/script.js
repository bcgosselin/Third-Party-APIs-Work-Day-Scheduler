//ensures document is ready
$(document).ready(function() {
  
  //call for getDate function
  getDate();
  
  //loads current date and time via DayJS CDN, plugss that data into a constant and calls for timeBlockColor function
  function getDate() {
    const currentDate = new Date();
   
    $('#currentDay').text(currentDate);
    
    timeBlockColor();
  }

  //pulls the current hour data out of DayJS CDN, sets constant for HTML class "row", pushes row into an array and itterates over each Id and extract
  //the hour from row id, sets variable rowHour, then compares each row id to the current hour to set class past, present, or future, and calls
  //for reloadLocalStorage
  function timeBlockColor() {
    var currentHour = dayjs().hour();
    const rows = document.getElementsByClassName("row");
    
    Array.from(rows).forEach(row => {
        let rowIdString = row.id;
        let rowHour;

        if (rowIdString) {
            rowHour = parseInt(rowIdString);
        }
            if (currentHour === rowHour) {
                $(row).removeClass('past future').addClass('present');
            } else if (currentHour > rowHour) {
                $(row).removeClass('future present').addClass('past');
            } else {
                $(row).removeClass('past present').addClass('future');
            }
        }
    );
    reloadLocalStorage();
  }

  // sets class row as a constant, pushes that constant into an array and itterates over them, sets timeblockid to row id, checks local storage for
  //matching timeblockid keys and pushes them into description HTML class
  function reloadLocalStorage() {
    const rows = document.getElementsByClassName("row");
    
    Array.from(rows).forEach(row => {
        let timeBlockId = row.id;
        let savedInput = localStorage.getItem(timeBlockId);
        if (savedInput !== null) {
            $(row).find('.description').val(savedInput);
        }
    });
  }

  //Jquery event listener that saves userinput to the local stoage from whichever textarea they chose to type in
  $('.saveBtn').on('click', function saveUserInput() {
    var textContent = $(this).siblings('.description').val();
    var timeBlockId = $(this).parent().attr('id');
    
    localStorage.setItem(timeBlockId, textContent);
  });

});