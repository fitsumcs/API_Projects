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
      data.then(data=>{
        data.forEach(element => {
            const opt = document.createElement('option');
            opt.value = element.country_name; 
            opt.text = element.country_name;
            sCountry .appendChild(opt);
        });

      })
}
// display the data 
// function data load 
showData(data)
{
    const spinner = document.querySelector('.spinner');
   
    const img = document.createElement('img');
    img.setAttribute('src','./img/spinner.gif');
    spinner.appendChild(img);

    setTimeout(()=>{
        if(spinner)
        {
            spinner.remove();
            this.displaydata(data);
        }
    },3000);
  
}

// // display data
displaydata(dataF)
{
    const tableRow = document.querySelector('#head');
    const resultDiv = document.querySelector('#det');
    const cont = document.querySelector('#cont');
    let result='';
    
  
  dataF.then(data=>{
      data.forEach(element=>{
        result += `
        <tr>
        <td>${element.name}</td>
        <td>${element.date.iso}</td>
        <td>${element.type[0]}</td>
        <td>${element.description}</td>
        </tr>
        `;
      })
      cont.innerHTML = result;
    });

    resultDiv.innerHTML = '<h3>Event Detail </h3>';
    tableRow.innerHTML = '<th>Name of The Event</th><th>Event Date</th><th>Type of Event</th><th>Description of the Event</th>';
    

}

}