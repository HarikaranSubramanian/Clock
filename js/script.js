 
    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let period = "AM";

      if (hours > 12) {
        hours -= 12;
        period = "PM";
      }

      hours = hours.toString().padStart(2, '0');
      minutes = minutes.toString().padStart(2, '0');
      seconds = seconds.toString().padStart(2, '0');

      const clockElement = document.getElementById('clock');
      const hoursElement = document.getElementById('hours');
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');
      const meridianElement = document.getElementById('meridian');

      hoursElement.textContent = hours;
      minutesElement.textContent = minutes;
      secondsElement.textContent = seconds;
      meridianElement.textContent = period;

      // Highlight the current meridian
      meridianElement.classList.toggle('bright', period === 'AM');
    }

    setInterval(updateClock, 1000); // Update every second
    updateClock(); // Initial update
