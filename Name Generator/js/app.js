// variables 
const submitBtn = document.querySelector('#view');
const content = document.querySelector('#generate-names');
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
    if(cValue === '' || gValue ==='' || nValue === '' ||Number(nValue)<=0)
    {
          showAlert('Please Provide Correct Values','alert');
    }
    else
    {
        resultDiv.innerHTML = '';
       fetchTheData(cValue,gValue,nValue)
       .then(data=>
        {
            resultDiv.innerHTML = `
              <tr>${name.name}</<tr>
              <tr>${name.gender}</<tr>
              <tr>${name.region}</<tr>
            
            `;
        })
       .catch(()=>resultDiv.innerHTML = 'The Server is Down!!')
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

function showAlert(message,className)
{
    const div = document.createElement('div');
    div.classList.add(className,'alert-danger','pr-0');
    div.innerHTML = message;
    content.insertBefore(div,document.getElementById('top'));

    setTimeout(()=>{
        div.remove();
    },1000);
}

