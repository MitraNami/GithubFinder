// Init GitHub
const github = new GitHub();
// Init UI
const ui = new UI();


const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', async(evt) => {
  // Clear alert message
  ui.clearAlert();
  //Get input text
  const username = evt.target.value;
  // Make sure the username is not empty
  if (username !== ''){
    // Make an HTTP GET request
    const {profile, repos, message } = await github.getUser(username);
    if (message === 'Not Found') {
      //Show an alert
      ui.showAlert('User not found!', 'alert alert-danger');
    } else {
      //Show profile and repos
      ui.showProfile(profile);
      ui.showRepos(repos);
    }
  } else {
    //Clear the profile area
    ui.clearProfile();
  }


});


