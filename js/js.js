const input = document.querySelector('.input-text');
const inputsecond = document.querySelector('.input-text-second');
const firstbutton = document.querySelector('.button-first');
const secondbutton = document.querySelector('.button-second');
const firstchain = document.querySelector('.first-chain');
const secondchain = document.querySelector('.second-chain');
const endtext = document.querySelector('.end');
const output = document.querySelector('.one');
const output2 = document.querySelector('.two');
firstbutton.addEventListener('click', ()=>{
const inputfirst = input.value;
if(inputfirst == ""){
    alert('Ви нічого не ввели');
}else{
    firstchain.style
    console.log(inputfirst);
    firstchain.style.display = "none";
    secondchain.style.display = "flex";
    output.innerHTML = inputfirst;
}
});

secondbutton.addEventListener('click', ()=>{
    const input2 = inputsecond.value;
    if(input2 == ""){
        alert('Ви нічого не ввели');
    }else{
        console.log(input2);
        secondchain.style.display = "none";
        endtext.style.display = "flex"; 
        output2.innerHTML = input2;
    }
    });
