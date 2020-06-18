const textI = document.querySelector('#searchUser');
const gitH = new GitHub();
textI.addEventListener('keyup',e=>{

   const input = textI.value;

   if(input !== '')
   {
    // console.log(input);
    // make the class 
    gitH.getUser(input).then(data=>{
       
        if(data.profile.message === 'Not Found')
        {
            // show error
        }
        else
        {
            // show profile
            console.log(data);
        }
    });
   }
   else
   {
    //    clear profile
   }


})