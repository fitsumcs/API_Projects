class UI
{

   constructor()
   {

   }

addYear()
{
    const sYears = document.querySelector('#year');
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
addMonth(sMonth)
{

  const max = new Date().getFullYear(); 
  const min = max - 20; 
  for (let i =1; i<=31; i++)
  {
      const opt = document.createElement('option');
      opt.value = i; 
      opt.text = i;
      sMonth.appendChild(opt);
  }


}



}