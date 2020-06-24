const textI = document.querySelector('#searchMovie');
const movApi = new Movie();
const movui = new MovieUI();
textI.addEventListener('keyup',e=>{

   const input = textI.value;

   if(input !== '')
   {
    // console.log(input);
    // make the class 
    movApi.getMovie(input).then(data=>{
       
      
            // show Movie
            movui.showMovie(data);
            movui.showCastMembers(data);
              
    });
   }
   else
   {
    //    clear profile
    movui.clearUi();
   }


})