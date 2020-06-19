// variables 
const submitBtn = document.querySelector('#view');
const resultDiv = document.querySelector('#rows');
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
          alert('All Fields Are Required');
    }
    else
    {
        resultDiv.innerHTML = '';
       fetchTheData()
       .then(data=>
        {
            resultDiv.innerHTML = `
              <tr>${name.name}</<tr>
              <tr>${name.gender}</<tr>
              <tr>${name.region}</<tr>
            
            `;
        })
       .catch(()=>console.log('There is error '))
       console.log('The Values ' + cValue + ' ' + gValue + ' '+ nValue);
    }
   

    
    
    e.preventDefault();
}

// fetch data 
async function fetchTheData(country,gender,number)
{
    
    const profileRespose = await fetch(`https://uinames.com/api/?region=${country}&gender=${gender}&amount=${number}`,{mode:'no-cors'}) 
    const repo = await profileRespose.json();
  
   return {repo}

}

