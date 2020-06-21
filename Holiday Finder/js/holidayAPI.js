class HolidayApi
{
  constructor()
  {
      this.key = '8f16f6ef4437a3f80433f3a133a3f31156f22d0f';
  }
// get  the 
  async getCountry()
  {
  // Holidays 
  const response = await  fetch(`https://calendarific.com/api/v2/countries?api_key=${this.key}`)
  const data =  await response.json();
  return data.response.countries
  }
// get the data based on metrics
  async getData(country,year,month,day)
{
  // Holidays 

const response = await  fetch(`https://calendarific.com/api/v2/holidays?api_key=${this.key}&country=${country}&year=${year}&month=${month}&day=${day}`)
const data =  await response.json();
return data.response.holidays

}




}