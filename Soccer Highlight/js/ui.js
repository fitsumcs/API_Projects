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
           output +=this.paintUI(element.videos[0].embed,element.title,element.competition.name,element.date);
           
       
      
         }
         else if (element.competition.name.includes('SPAIN')) 
         {
           
         } 
         else {
           
         }
          
            
       });
       this.divEngland.innerHTML = output;
        
    }

    paintUI(vedio,title,competition,date)
    {
      let pout=`
           
           <div class="col-sm-6   mb-3">
           <div class="card mb-3 d-flex align-items-stretch">

               <div class="card-body">
                  <div class="card-img-top">${vedio}</div>
                   <h5 class="card-title mt-3">${title}</h5>
                   <p class="card-text"><small class="text-muted">${competition}</small></p>
                   <p class="card-text"><small class="text-muted">Date: ${date}</small></p>
                </div>
           </div>
       </div>
      
           `;
           return pout;
    }
}



