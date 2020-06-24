document.addEventListener('DOMContentLoaded', loadDataFromSApi);
const socApi = new SoccerApi();
const soccerUi = new SoccerUI();

function loadDataFromSApi()
{
        
        
   
//      make the class 
     socApi.getSoccerData().then(data1=>{
        
             // show data
             soccerUi.showSoccerData(data1);
         
     });
   
}


