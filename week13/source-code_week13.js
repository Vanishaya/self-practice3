function showCurrentDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const hour = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const sec = String(now.getSeconds()).padStart(2, '0');

  console.log(`Current Date: ${year}-${month}-${day}`);
  console.log(`Current Time: ${hour}:${min}:${sec}`);
}

function diffDays(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffMs = Math.abs(d2 - d1);
  const diff = diffMs / (1000 * 60 * 60 * 24);

  console.log(`Difference: ${diff} days`);
}

function getWeekday(dateString) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date(dateString);
  console.log(days[d.getDay()]);
}

function addDays(dateString, daysToAdd) {
  const d = new Date(dateString);
  d.setDate(d.getDate() + daysToAdd);

  console.log(d.toISOString().split("T")[0]);
}

function showThaiDateTime() {
  const now = new Date();

  const thai = now.toLocaleDateString("th-TH", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const time = now.toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit"
  });

  console.log(`${thai}  ${time}`);
}

function countdown(targetDate) {
  const target = new Date(targetDate);
  const now = new Date();

  let diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= 1000 * 60 * 60;

  const minutes = Math.floor(diff / (1000 * 60));
  diff %= 1000 * 60;

  const seconds = Math.floor(diff / 1000);

  console.log(`Remaining: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
}
