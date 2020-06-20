class UI
{

   constructor()
   {

   }

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



}