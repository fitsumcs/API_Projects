const textI = document.querySelector('#searchUser');
const gitH = new GitHub();
const ui = new UI();
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
            ui.showError('User Does Not Exist', 'alert alert-danger');
        }
        else
        {
            // show profile
            ui.showProfile(data.profile);
            // console.log(data);
        }
    });
   }
   else
   {
    //    clear profile
        ui.clearProfile();
   }


})