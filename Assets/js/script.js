$(document).ready(function() {
 
  getDate();
  
  function getDate() {
    const currentDate = new Date();
   
    $('#currentDay').text(currentDate);
    
    timeBlockColor();
  }

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

  $('.saveBtn').on('click', function saveUserInput() {
    var textContent = $(this).siblings('.description').val();
    var timeBlockId = $(this).parent().attr('id');
    
    localStorage.setItem(timeBlockId, textContent);
  });

});