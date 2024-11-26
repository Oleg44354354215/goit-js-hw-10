import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const btn = document.querySelector('[data-start]');
let userSelectedDate = null;
let interval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      
      if (selectedDate <= new Date()) {
           iziToast.error({
          title: 'Error',
          iconUrl: `../img/bix.png`,
          message: 'Please choose a date in the future',
          backgroundColor:`#ef4040`,
        messageColor:`white`,
        position:`topRight`,
        titleColor:`white`
        });
        btn.disabled = true;
      } else {
        userSelectedDate = selectedDate;
        btn.disabled = false;
      }
  },
};

flatpickr('#datetime-picker', options);

btn.addEventListener('click', function () {
  if (userSelectedDate) {
      interval = setInterval(() => {
          const timeDifference = userSelectedDate - new Date();
          if (timeDifference <= 0) {
              clearInterval(interval);
              updateTimer(0, 0, 0, 0); // Устанавливаем таймер в ноль
              iziToast.success({
                  title: 'Completed',
                  message: 'Timer has reached zero!',
              });
              return;
          }

          const { days, hours, minutes, seconds } = convertMs(timeDifference);
          updateTimer(days, hours, minutes, seconds);
      }, 1000);
      btn.disabled = true;
  }
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

 function updateTimer(days, hours, minutes, seconds) {
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  } 
