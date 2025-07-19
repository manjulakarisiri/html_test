
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const digitalTime = document.getElementById('digital-time');
const dateDisplay = document.getElementById('date-display');
const themeToggle = document.getElementById('theme-toggle');
const ticksContainer = document.getElementById('ticks');

// Generate tick marks
for (let i = 0; i < 60; i++) {
  const tick = document.createElement('div');
  tick.style.transform = `rotate(${i * 6}deg) translate(-50%, -50%)`;
  tick.style.height = i % 5 === 0 ? '20px' : '10px';
  ticksContainer.appendChild(tick);
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ms = now.getMilliseconds();

  const smoothSeconds = seconds + ms / 1000;

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = smoothSeconds * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  digitalTime.textContent = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateDisplay.textContent = now.toLocaleDateString(undefined, options);
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

setInterval(updateClock, 50);
updateClock();