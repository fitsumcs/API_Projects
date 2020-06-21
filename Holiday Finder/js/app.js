// variables 
document.addEventListener('DOMContentLoaded', addYearCountry);
  // Generate the year 
  const sYears = document.querySelector('#year');
  // Generate the country
  const sCountry = document.querySelector('#country');
//   button 
document.getElementById('form').addEventListener('submit',viewCalander);

// add Year 
function addYearCountry()
{
  // Last 20 years 
  const max = new Date().getFullYear(); 
  const min = max - 20; 



  for (let i =max; i>=min; i--)
  {
      const opt = document.createElement('option');
      opt.value = i; 
      opt.text = i;
      sYears.appendChild(opt);
  }

  addCountry();

}

async function getCountry()
{
// Holidays 
const response = await  fetch("https://calendarific.com/api/v2/countries?api_key=8f16f6ef4437a3f80433f3a133a3f31156f22d0f")
const data =  await response.json();
return data.response.countries
}
 
function addCountry()
{
      getCountry().then(data=>{
        data.forEach(element => {
            const opt = document.createElement('option');
            opt.value = element.country_name; 
            opt.text = element.country_name;
            sCountry .appendChild(opt);
            // console.log(element.country_name + ' : ' + element.countrycode )
        });

      })
    //   getCountry().then(data=>{
        
    //         console.log(data)
        
    //   })

}


// view calander 
function viewCalander(e)
{
  
  const country = sCountry.value;
  const year = sYears.value;

  if(country==='' || year === '')
  {
    alert('Please Enter data');  
    
  } 
  else{
    
    showData(country,year);
  }

 
  e.preventDefault();


}

// function data load 
function showData(country,year)
{
    const spinner = document.querySelector('.spinner');
    const result = document.querySelector('#result');
    const img = document.createElement('img');
    img.setAttribute('src','./img/spinner.gif');
    spinner.appendChild(img);

    setTimeout(()=>{
        if(spinner)
        {
            spinner.remove();
        }
    },3000);
   displaydata(country,year);
    

}
// display data
function displaydata(country,year)
{
  getData(country,year)
  .then(data=>console.log(data))
}
async function getData(country,year)
{
  // Holidays 
const response = await  fetch(`https://calendarific.com/api/v2/holidays?&api_key=8f16f6ef4437a3f80433f3a133a3f31156f22d0f&country=US&year=${year}`)
const data =  await response.json();
return data.response.holidays

}