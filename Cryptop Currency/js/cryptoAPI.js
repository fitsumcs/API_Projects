class CryptoApi
{

constructor()
{
    this.key = "3eec3e3c-6937-4949-aac7-e6effbd8cdfa";
}

async getData()
{
    const response = await fetch(`https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=${this.key}`,{mode:'no-cors'})

   const data = await response.json()
   
   return data;

}




}