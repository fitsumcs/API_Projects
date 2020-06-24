class GitHub
{

    constructor()
    {
        this.repNo = 10;
        this.repoSort = 'created:asc';
    }

   async getUser(user)
   {
       const profileRespose = await fetch(`https://api.github.com/users/${user}`) 
       const profileRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repNo}&sort=${this.repoSort}`) 
       const profile = await profileRespose.json();
       const repo = await profileRepo.json();
     
      return {profile,repo}
    }

}