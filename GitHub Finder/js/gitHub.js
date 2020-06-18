class GitHub
{

    constructor()
    {
        this.cId = 'dba7043e25bdb90f7b09';
        this.cSec = '5a696cd2d4899f1482e3204397aef02cd5240f11';
    }

   async getUser(user)
   {
       const profileRespose = await fetch(`https://api.github.com/users/${user}?client_id=${this.cId}&client_secret=${this.cSec}`) 
      const profile = await profileRespose.json();
     
      return {profile}
    }

}