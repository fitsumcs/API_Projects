// variables 
const submitBtn = document.querySelector('#view');
const resultDiv = document.querySelector('#result');
const country = document.querySelector('#country');
const genre = document.querySelector('#genre');
const no = document.querySelector('#quantity');



submitBtn.addEventListener('click',viewNames);

// function for view button 
function viewNames(e)
{
    const cValue = country.value;
    const gValue = genre.value;
    const nValue = no.value;
    if(cValue === '' || gValue ==='' || nValue === '')
    {
          alert('Enter values...');
    }
    else
    {
     
        
       console.log('The Values ' + cValue + ' ' + gValue + ' '+ nValue);
    }
   

    
    
    e.preventDefault();
}

