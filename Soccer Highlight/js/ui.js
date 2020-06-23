class SoccerUI {
    constructor() 
    {
       this.divEngland = document.getElementById('en');
    

    }

    showSoccerData(data) 
    {
        let output = '';
        // console.log(data.data);
       data.data.forEach(element => 
        {
         if(element.competition.name.includes('ENGLAND'))
         {
           output +=`
           
           <div class="col-sm-6  mb-3">
           <div class="card mb-3 h-100">

               <div class="card-body">
                   <p class="card-text"><img src=${element.thumbnail}></p>
                   <h5 class="card-title">${element.title}</h5>
                   <p class="card-text"><small class="text-muted">Comptition: ${element.competition.name}</small></p>
                   <p class="card-text"><small class="text-muted">Date: ${element.date}</small></p>
                </div>
           </div>
       </div>
           
         
           
           
           `;
         }
            // console.log(element.competition.name);
            // console.log(element.date);
            // console.log(element.embed);
            // console.log(element.thumbnail);
            // console.log(element.title);
            
       });
       this.divEngland.innerHTML = output;
        
    }
}



