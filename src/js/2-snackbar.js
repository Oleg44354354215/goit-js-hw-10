import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconResolve from '../img/Group.png'
import iconReject from '../img/bix.png'

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

  const delay = parseInt(this.querySelector('[name="delay"]').value, 10);
  const state = this.querySelector('[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
        console.log(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(delay);
        console.log(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

    promise.then(
    (result) => {
      iziToast.success({
        title: 'Ok',
        message: `Fulfilled promise in ${result}ms`,
        position:`topRight`,
        maxWidth:`383px`,
        color: `#59a10d`,
        titleColor:`white`,
        iconUrl:`${iconResolve}`,
        messageColor:`white`,

      });
    
    },
    (result) => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${result}ms`,
        position:`topRight`,
        maxWidth:`302px`,
        color: `#ef4040`,
        titleColor:`white`,
        iconUrl:`${iconReject}`,
        messageColor:`white`,
    });
    }
    ); 

    form.reset();
})