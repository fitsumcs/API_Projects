document.addEventListener('DOMContentLoaded', loadDataFromApi);
const gitH = new CovidApi();
const ui = new UI();

function loadDataFromApi()
{
    
   
     // make the class 
     gitH.getData().then(data=>{
        
             // show data
             ui.showData(data);
         
     });
    

}
