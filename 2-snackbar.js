import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{i as t}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector(".form");i.addEventListener("submit",function(s){s.preventDefault();const e=parseInt(this.querySelector('[name="delay"]').value,10),r=this.querySelector('[name="state"]:checked').value;new Promise((o,l)=>{setTimeout(()=>{r==="fulfilled"?(o(e),console.log(`✅ Fulfilled promise in ${e}ms`)):(l(e),console.log(`❌ Rejected promise in ${e}ms`))},e)}).then(o=>{t.success({title:"Ok",message:`✅ Fulfilled promise in ${o}ms`,position:"topRight",maxWidth:"383px",color:"#59a10d",titleColor:"white",iconUrl:"../img/Group.png",messageColor:"white"})},o=>{t.error({title:"Error",message:`❌ Rejected promise in ${o}ms`,position:"topRight",maxWidth:"302px",color:"#ef4040",titleColor:"white",iconUrl:"../img/bix.png",messageColor:"white"})}),i.reset()});
//# sourceMappingURL=2-snackbar.js.map
