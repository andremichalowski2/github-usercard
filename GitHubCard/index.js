import axios from 'axios';




let gitData = {};
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/andremichalowski')
  .then(res => {
    console.log(res);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
      //(Data "studied" in dev tools")
    Skip to STEP 3.
*/
    
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
    //3.1. Add an object outside of the axios call so that you can add key/value data from the axios data
    //3.2 Add
    gitData.img = res.data.avatar_url;
    gitData.name = res.data.name;
    gitData.login = res.data.login;
    gitData.location = res.data.location;
    gitData.profileUrl = res.data.url;
    gitData.followers = res.data.followers;
    gitData.following = res.data.following;
    gitData.bio = res.data.bio;
    console.log(gitData)

  })
  .catch(err => {
    console.log('Failure!:', err);
  })


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

//Create Function (function createCard(params) { ... })

  //1. Create HTML markup: (const *cardElementTitleEx.cCard* = document.createElement('*elementYou'reSelectingFor*))

  //2. Define HTML structure: (*mainCardElementEx.cCard*.append(allCardElementTitlesListedAsParams)

  //3. Add some class names: (*relevantCardElementThatNeedsClass*.classList.add('*relevantClassName*')

  //4. Add some content!: (*relevantCardElementThatNeedsText*.textContent = *objectmadeToHoldAxiosDataEx.gitData*.keyRelevantToCardElement)
                        //(*relevantCardElementThatNeedsSource*.src= *objectmadeToHoldAxiosDataEx.gitData*.keyRelevantToCardElement)

  //5. Return: (return *mainCardElement*Ex.cCard)




/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
