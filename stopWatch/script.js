let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let interval = null;
  let isRunning = false;

  function start() {
    if (!isRunning) {
      interval = setInterval(updateTime, 10); // Update every 10ms for milliseconds
      isRunning = true;
    }
  }

  function stop() {
    clearInterval(interval);
    isRunning = false;
  }

  function reset() {
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('display').textContent = "00:00:00.00";
  }

  function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
    }

    const format = (val, digits = 2) => String(val).padStart(digits, '0');
    document.getElementById('display').textContent = 
      `${format(hours)}:${format(minutes)}:${format(seconds)}.${format(milliseconds / 10, 2)}`;
  }