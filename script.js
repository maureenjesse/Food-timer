function startTimer() {
  const minutes = parseInt(document.getElementById("minutes").value);
  if (isNaN(minutes) || minutes < 1) {
    alert("");
    return;
  }

  const timerDisplay = document.getElementById("timer-display");
  const alarm = document.getElementById("alarm");
  let timeLeft = minutes * 60;

  const timer = setInterval(() => {
    const minutesLeft = Math.floor(timeLeft / 60);
    const secondsLeft = timeLeft % 60;
    timerDisplay.textContent = `${minutesLeft}:${
      secondsLeft < 10 ? "0" : ""
    }${secondsLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Time's up! Food is done! 🎉";
      alarm.play(); // Play the alarm sound
    } else {
      timeLeft--;
    }
  }, 1000);
}
