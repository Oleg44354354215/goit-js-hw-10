import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector(".form");i.addEventListener("submit",function(s){s.preventDefault();const e=parseInt(this.querySelector('[name="delay"]').value,10),r=this.querySelector('[name="state"]:checked').value;new Promise((t,l)=>{setTimeout(()=>{r==="fulfilled"?(t(e),console.log(`✅ Fulfilled promise in ${e}ms`)):(l(e),console.log(`❌ Rejected promise in ${e}ms`))},e)}).then(t=>{o.success({title:"Ok",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight",maxWidth:"383px",color:"#59a10d",titleColor:"white",messageColor:"white"})},t=>{o.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight",maxWidth:"302px",color:"#ef4040",titleColor:"white",messageColor:"white"})}),i.reset()});
//# sourceMappingURL=2-snackbar.js.map