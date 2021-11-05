const SwitchValue = document.getElementById("switch-value");
const Switch = document.getElementById("switch");
const MonthlyPayment = document.getElementsByClassName("monthly-payment");
const AnualPayment = document.getElementsByClassName("anual-payment");

Switch.addEventListener('click',()=>{
    if(SwitchValue.checked){
        for(let i=0;i<MonthlyPayment.length;i++){
            MonthlyPayment[i].classList.remove("hide");
            AnualPayment[i].classList.add("hide");
        }
    }
    else{
        for(let i=0;i<MonthlyPayment.length;i++){
            MonthlyPayment[i].classList.add("hide");
            AnualPayment[i].classList.remove("hide");
        }
    }
})