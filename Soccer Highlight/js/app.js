document.addEventListener('DOMContentLoaded', loadDataFromApi);
const socApi = new SoccerApi();
const soccerUi = new SoccerUI();

function loadDataFromApi()
{
    
   
     // make the class 
     socApi.getSoccerData().then(data1=>{
        
             // show data
             soccerUi.showSoccerData(data1);
         
     });
   
}


