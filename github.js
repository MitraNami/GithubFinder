class GitHub {

  constructor() {
    this.config = {
      headers: {
        Authorization: `token ${my_token}`
      }
    };
    this.repos_count = 4;
    this.repos_sort = 'created: asc';
  
  }

  async getUser(user) {
    const profileResponse = fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );
    const reposResponse = fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    );
    
   const responses = await Promise.all([
     profileResponse,
     reposResponse
   ]);

   if (responses.every(res => res.ok)) {
     // if all responses have true for ok key
     // get profile and repos objects
    const [profile, repos] = await Promise.all(
      responses.map(response => response.json())
    );
    return {profile, repos};
   } else{
    return {message: 'Not Found'};
   }
    
  }

}