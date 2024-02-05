const events = [
    { date: 1, title: 'Tree Planting Event' },
    { date: 15, title: 'Sustainability Workshop' },
    { date: 27, title: 'VrikshShakti Drive' },
   ];
   
   const calendar = document.getElementById('calendar');
   const calendarBody = calendar.querySelector('tbody');
   
   function generateCalendar(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDayOfWeek = lastDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();
   
    let calendarRows = '';
   
    for (let i = 0; i < 6; i++) {
     let row = '<tr>';
   
     for (let j = 0; j < 7; j++) {
      const dayOfMonth = i * 7 + j - firstDayOfWeek + 1;
   
      if (dayOfMonth < 1 || dayOfMonth > daysInMonth) {
       row += '<td></td>';
      } else {
       const event = events.find(event => event.date === dayOfMonth);
       const cell = '<td>' + dayOfMonth + '</td>';
   
       if (event) {
        const eventDiv = '<div class="event">' + event.title + '</div>';
        row += cell.replace('</td>', eventDiv + '</td>');
       } else {
        row += cell;
       }
      }
     }
   
     calendarRows += row + '</tr>';
    }
   
    calendarBody.innerHTML = calendarRows;
   }
   
   generateCalendar(2024, 1); //February 2024 Calendar