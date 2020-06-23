class SoccerUI {
    constructor() 
    {
       this.divEngland = document.getElementById('en');
    

    }

    showSoccerData(data) 
    {
        let output = '';
        // console.log(data.data);
       [1,2,3,4,5,6,7,7,7,7,7,7,7].forEach(element => 
        {
        //  if(element.competition.name.includes('ENGLAND'))
        //  {
           output +=`
           
           <div class="col-sm-6  mb-3">
           <div class="card mb-3 h-100">

               <div class="card-body">
                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
           </div>
       </div>
           
         
           
           
           `;
        //  }
            // console.log(element.competition.name);
            // console.log(element.date);
            // console.log(element.embed);
            // console.log(element.thumbnail);
            // console.log(element.title);
            
       });
       this.divEngland.innerHTML = output;
        
    }
}



