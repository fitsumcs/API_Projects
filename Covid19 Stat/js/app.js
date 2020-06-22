document.addEventListener('DOMContentLoaded', loadDataFromApi);
const gitH = new CovidApi();
const ui = new UI();

function loadDataFromApi()
{
    
   
     // make the class 
     gitH.getData().then(data1=>{
        
             // show data
        ui.showData(data1);
        ui.showChart(data1);
         
     });
   
    

}


