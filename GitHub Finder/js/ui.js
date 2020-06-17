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
                    <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block mb-4" >View Porfile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">#Public Repo : ${user.public_repos}</span>
                    <span class="badge badge-secondary">#Public Gists : ${user.public_gists}</span>
                    <span class="badge badge-success">#Followers: ${user.followers}</span>
                    <span class="badge badge-info">#Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    </ul>
                </div>
              
            </div>
        </div>
        <h3 class="page-heading mb-3">Public Repositories</h3>
        <div id="prepo"></div>
        `;

        console.log(user);
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

}