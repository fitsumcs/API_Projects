// objects 
const ui = new UI();
const api = new HolidayApi();
// variables 
document.addEventListener('DOMContentLoaded', addYMD);
  // Generate the year 
  const sYears = document.querySelector('#year');
  // Generate the country
  const sCountry = document.querySelector('#country');
  // Generate the month
  const sMonth = document.querySelector('#month');
   // Generate the Day
   const sDay = document.querySelector('#day');
//   button 
document.getElementById('form').addEventListener('submit',viewCalander);

// add year , month , day
function addYMD()
{
   ui.addYear(sYears);
   ui.addMonth(sMonth);
   ui.addDay(sDay);
   ui.addCountry(api.getCountry());

}

// view calander 
function viewCalander(e)
{
  
  const country = sCountry.value;
  const year = sYears.value;
  const month = sMonth.value;
  const day =sDay.value; 

  if(year === '')
  {
    alert('Please Enter Country and Year');  
    
  } 
  else{
    
    ui.showData(api.getData(country,year,month,day));
  }

 
  e.preventDefault();


}

