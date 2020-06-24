class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class= "card card-body mb-3">
            <div class="row">  
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="blank" class="btn btn-secondary btn-block mb-4" >View Porfile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary font-weight-bold">#Public Repo : ${user.public_repos}</span>
                    <span class="badge badge-secondary font-weight-bold">#Public Gists : ${user.public_gists}</span>
                    <span class="badge badge-success font-weight-bold">#Followers: ${user.followers}</span>
                    <span class="badge badge-info font-weight-bold">#Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                    <li class="list-group-item font-weight-bold">Company: ${user.company}</li>
                    <li class="list-group-item font-weight-bold">Location: ${user.location}</li>
                    <li class="list-group-item font-weight-bold">Member Since: ${user.created_at}</li>
                    <li class="list-group-item font-weight-bold">Website/Blog: ${user.blog}</li>
                    </ul>
                </div>
              
            </div>
        </div>
        <h3 class="page-heading mb-3">Public Repositories <span class="badge badge-pill badge-secondary ">10</spa></h3>
        <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
          <h6 class="page-heading mb-3">Repositorie Name</h6>
          </div>
          <div class="col-md-6">
          <h6 class="page-heading mb-3">Repositorie Details [starts,watchers,Forks]</h6>
          </div>
        </div>
        
        </div>
        <div id="prepo"></div>
        `;

        // console.log(user);
    }
// clear profile when empty
    clearProfile()
    {
        this.profile.innerHTML = '';
    }
// show alert message
    showError(msg,classType)
    {
        // clear 
        this.clearAlert();
      const div = document.createElement('div');
      div.className = classType;
      div.appendChild(document.createTextNode(msg));
    //   parent 
    const container = document.querySelector('.searchContainer');
    const con2 = document.querySelector('.search');

    container.insertBefore(div,con2);

    // timeout
    setTimeout(()=>{this.clearAlert()},1000)
    

}
// clear alert 
clearAlert()
{
    const alert = document.querySelector('.alert');
    if(alert)
    {
        alert.remove();
    }
}

// show repos
showRepo(repos)
{
 let output = '';
 repos.forEach((element)=>{
   output += `
     <div class="card card-body mb-2">
     <div class="row">
       <div class="col-md-6">
       <a href="${element.html_url}">${element.name}</a>
       </div>
       <div class="col-md-6">
       <span class="badge badge-primary">Starts : ${element.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers : ${element.watchers_count}</span>
        <span class="badge badge-success">Forks: ${element.forks_count}</span>
       </div>
     </div>
     
     </div>
   `;
 });
  document.getElementById('prepo').innerHTML = output;
}

}