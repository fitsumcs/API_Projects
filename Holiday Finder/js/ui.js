class UI
{

    // object from api 
    
   constructor()
   {

   }
// add year 
addYear(sYears)
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


}
// add month
addMonth(sMonth)
{

  for (let i =1; i<=12; i++)
  {
      const opt = document.createElement('option');
      opt.value = i; 
      opt.text = i;
      sMonth.appendChild(opt);
  }
}
// Add day
addDay(sDay)
{

  for (let i =1; i<=31; i++)
  {
      const opt = document.createElement('option');
      opt.value = i; 
      opt.text = i;
      sDay.appendChild(opt);
  }


}

// add country 
addCountry(data)
{
    // console.log(data);
      data.then(data=>{
        data.forEach(element => {
            const opt = document.createElement('option');
            opt.value = element.country_name; 
            opt.text = element.country_name;
            sCountry .appendChild(opt);
            // console.log(element.country_name + ' : ' + element.countrycode )
        });

      })
}



}