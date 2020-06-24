class SoccerUI {
    constructor() 
    {
       this.divEngland = document.getElementById('en');
       this.divSpain = document.getElementById('sp');
       this.divItaly = document.getElementById('it');
       this.divFrance = document.getElementById('fr');
       this.divGermen = document.getElementById('gr');
       this.divOther = document.getElementById('ot');
    

    }

    showSoccerData(data) 
    {
        let output1 = '';
        let output2 = '';
        let output3 = '';
        let output4 = '';
        let output5 = '';
        let output6 = '';
         console.log(data.data);
       data.data.forEach(element => 
        {
         if(element.competition.name.includes('ENGLAND'))
         {
           output1 +=this.paintUI(element.videos[0].embed,element.title,element.competition.name,element.date);
           
       
      
         }
         else if (element.competition.name.includes('SPAIN')) 
         {
          output2 +=this.paintUI(element.videos[0].embed,element.title,element.competition.name,element.date);
         } 
         else if (element.competition.name.includes('ITALY')) 
         {
          output3 +=this.paintUI(element.videos[0].embed,element.title,element.competition.name,element.date);
         } 
         else if (element.competition.name.includes('FRANCE')) 
         {
          output4 +=this.paintUI(element.videos[0].embed,element.title,element.competition.name,element.date);
         } 
         else if (element.competition.name.includes('GERMANY')) 
         {
          output5 +=this.paintUI(element.videos[0].embed,element.title,element.competition.name,element.date);
         } 
         else
         {
          output6 +=this.paintUI(element.videos[0].embed,element.title,element.competition.name,element.date);
         } 
       
          
            
       });
       this.divEngland.innerHTML = output1;
       this.divSpain.innerHTML = output2;
       this.divItaly.innerHTML = output3;
       this.divFrance.innerHTML = output4;
       this.divGermen.innerHTML = output5;
       this.divOther.innerHTML = output6;
        
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



