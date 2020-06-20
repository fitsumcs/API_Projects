class HolidayApi
{
  constructor()
  {
      this.key = '8f16f6ef4437a3f80433f3a133a3f31156f22d0f';
  }

  async getCountry()
  {
  // Holidays 
  const response = await  fetch(`https://calendarific.com/api/v2/countries?api_key=${this.key}`)
  const data =  await response.json();
  return data.response.countries
  }




}