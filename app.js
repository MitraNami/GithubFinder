// Init GitHub
const github = new GitHub();


const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', async(evt) => {
  //Get input text
  const username = evt.target.value;
  // Make sure the username is not empty
  if (username !== ''){
    // Make an HTTP GET request
    const {profile } = await github.getUser(username);
    if (profile.message === 'Not Found') {
      //Show an alert
    } else {
      //Show profile
      console.log(profile)
    }
  } else {
    //Clear the profile area

  }


});


