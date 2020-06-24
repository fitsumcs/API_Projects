class SoccerUI {
    constructor() 
    {
       this.divEngland = document.getElementById('nav-england');
    

    }

    showSoccerData(data) 
    {
        let output = '';
        // console.log(data);
       data.data.forEach(element => 
        {
         if(element.competition.name.includes('ENGLAND'))
         {
           output +=`
           <div class="card-columns d-inline-block">
           <div class="card" style="width: 18rem;">
           <img class="card-img-top" src="..." alt="Card image cap">
           <div class="card-body">
             <h5 class="card-title">Card title</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
         <div>
           
           
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



