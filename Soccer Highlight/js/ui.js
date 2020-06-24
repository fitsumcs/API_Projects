class SoccerUI {
    constructor() 
    {
       this.divEngland = document.getElementById('en');
    

    }

    showSoccerData(data) 
    {
        let output = '';
         console.log(data.data);
       data.data.forEach(element => 
        {
         if(element.competition.name.includes('ENGLAND'))
         {
           output +=`
           
           <div class="col-sm-6   mb-3">
           <div class="card mb-3 d-flex align-items-stretch">

               <div class="card-body">
                  <div class="card-img-top">${element.videos[0].embed}</div>
                   <h5 class="card-title mt-3">${element.title}</h5>
                   <p class="card-text"><small class="text-muted">${element.competition.name}</small></p>
                   <p class="card-text"><small class="text-muted">Date: ${element.date}</small></p>
                </div>
           </div>
       </div>
      
       
         
           
           
           `;
          //  console.log(element.embed);
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



