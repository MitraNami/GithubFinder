class UI {

  constructor() {
    this.profile = document.querySelector('#profile');
  }


  showProfile(userProfile) {
    const {
      avatar_url,
      html_url,
      public_repos,
      public_gists,
      followers,
      following,
      company,
      blog,
      location,
      created_at
    } = userProfile;
  
    const profile = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-2">
            <img class="img-fluid mb-2" src=${avatar_url} />
            <a class="btn btn-primary btn-block mb-1" href=${html_url} target="_blank">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-warning">Public Repos: ${public_repos}</span>
            <span class="badge badge-dark">Public Gists: ${public_gists}</span>
            <span class="badge badge-info">Following: ${following}</span>
            <span class="badge badge-success">Followers: ${followers}</span>
            <table class="table table-bordered table-hover mt-2">
              <tr>
                <th scope="row">Company:</th>
                <td>${company ? company : '___'}</td>
              </tr>
              <tr>
                <th scope="row">Website/Blog:</th>
                <td>${blog ? blog : '___'}</td>
              </tr>
              <tr>
                <th scope="row">Location:</th>
                <td>${location ? location : '___'}</td>
              </tr>
              <tr>
                <th scope="row">Member Since:</th>
                <td>${new Date(created_at)}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    
    `;

    this.profile.innerHTML = profile;
  }

  showRepos(repos) {
    const repoCards = repos.reduce((acc, repo) => {
      const repoCard = `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-warning">Stars:${repo.stargazers_count}</span>
              <span class="badge badge-dark">Watchers:${repo.watchers_count}</span>
              <span class="badge badge-info">Forks:${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
      return acc + repoCard;
      
    }, '');
    //output the repos
    document.querySelector('#repos').innerHTML = repoCards;
  }

  showAlert(msg, classNames) {
    //clear the profile first
    this.clearProfile();
    const alert = document.createElement('div');
    alert.className = `${classNames} mt-2 text-center`;
    alert.textContent = msg;
    //Insert the alert above the profile section
    document.querySelector('.search')
      .insertAdjacentElement('afterend', alert);
  }

  clearAlert() {
    const alert = document.querySelector('.alert');
    //if there is an alert clear it
    alert && alert.remove();
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
  
}