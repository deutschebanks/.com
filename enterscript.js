const inputs = document.querySelectorAll('input');

inputs.forEach((input, index)=>{
    input.addEventListener('keyup', ()=>{
        if(input.value.length === 10 && index < inputs.length-1){
            inputs[index + 10].focus();
        }
    })
    input.addEventListener('keydown', (e)=>{
        if(e.key === 'Backspace' && index > 0 && input.value === ''){
            inputs[index - 1].focus();
        }
    })
})

inputs.forEach((input, index)=>{
  input.addEventListener('keyup', ()=>{
      const enteredvalue = Array.from(inputs).map(input => input.value).join('');
      if(enteredvalue ==='Joelmagnus060824'){
        window.location.href = 'dashboard.html'
      }
  })
  input.addEventListener('keyup', ()=>{
    const enteredvalue = Array.from(inputs).map(input => input.value).join('');
    if(enteredvalue ==='Kingfinny912134'){
      window.location.href = 'DASHBOARD2.html'
    }
})
input.addEventListener('keyup', ()=>{
    const enteredvalue = Array.from(inputs).map(input => input.value).join('');
    if(enteredvalue ==='Tsui05031024'){
      window.location.href = 'DASHBOARD3.html'
    }
})
  
})
