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
      <div id="reops"></div>
    
    `;

    this.profile.innerHTML = profile;
  }

  showAlert(msg, classNames) {
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
  
}