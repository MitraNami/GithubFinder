class GitHub {

  constructor() {
    this.config = {
      headers: {
        Authorization: `token ${my_token}`
      }
    };
  
  }

  async getUser(user) {
    const profileResponse = fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );
    
    const profile = await (await profileResponse).json();
    
    return {
      profile
    };
  }

}