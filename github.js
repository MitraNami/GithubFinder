class GitHub {

  constructor() {
    this.config = {
      headers: {
        Authorization: 'token 18e09b11cb916fb4b73248cb8186af86d6751b17'
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