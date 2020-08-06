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
    // console.log(gitData)

  })
  .catch(err => {
    console.log('Failure!:', err);
  })


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

//Create Function (function createCard(params) { ... })
function createCard(img, name, login, location, profileUrl, followers, following, bio) {
  //1. Create HTML markup: (const *cardElementTitleEx.cCard* = document.createElement('*elementYou'reSelectingFor*))
  const cCard = document.createElement('div');
  const cImg = document.createElement('div');
  const cCardInfo = document.createElement('div');
  const cName = document.createElement('h3');
  const cLoginUN = document.createElement('p');
  const cLocation = document.createElement('p');
  const cProfileText = document.createElement('p');
  const cProfileUrl = document.createElement('a');
  const cFollowers = document.createElement('p');
  const cFollowing = document.createElement('p');
  const cBio = document.createElement('p');

  //2. Define HTML structure: (*mainCardElementEx.cCard*.append(allCardElementTitlesListedAsParams)
  cCard.append(cImg, cCardInfo, cName, cLoginUN, cLocation, cProfileText, cProfileUrl, cFollowers, cFollowing, cBio);

  //3. Add some class names: (*relevantCardElementThatNeedsClass*.classList.add('*relevantClassName*')
  cCard.classList.add('card');
  cCardInfo.classList.add('card-info');
  cName.classList.add('name');
  cLoginUN.classList.add('p');
  cLocation.classList.add('p');

  //4. Add some content!: (*relevantCardElementThatNeedsText*.textContent = *objectmadeToHoldAxiosDataEx.gitData*.keyRelevantToCardElement)
                        //(*relevantCardElementThatNeedsSource*.src= *objectmadeToHoldAxiosDataEx.gitData*.keyRelevantToCardElement)
  cImg.src = img;
  cName.textContent = name;
  cLoginUN.textContent = login;
  cLocation.textContent = gitData.location;
  cProfileText.textContent = 'Profile', gitData.profileURL;
  cFollowers.textContent = gitData.followers;
  cFollowing.textContent = gitData.following;
  cBio.textContent = gitData.bio;

  //5. Return: (return *mainCardElement*Ex.cCard)
  return cCard;
};
  //6. Check DOM
  // console.log(createCard());

  //7. -----Append Markup to DOM as child of Cards (Manual and forEach)------
  const cards = document.querySelector('.cards');
  console.log(cards);

  // //***Append Manual:
  //    function appendbody(title, date) {
  //      body.append(createArticle(data.title, 'date', 'firstParagraph', 'secondParagraph', 'thirdParagraph'));
  //    };
  //    appendbody();
 
  //  // ***Append Loop
  //  gitData.forEach((data => {
  //        cards.append(createCard(data.cImg, data.cCardInfo, data.cName, data.cLogin, data.cLocation));
  //      }));
  // console.log(gitData);

  cards.append(createCard(gitData.img, gitData.name, gitData.login, gitData.location, gitData.profileUrl, gitData.followers, gitData.following, gitData.bio));








/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["ELAndrews", "sergeikabuldzhanov", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(element => {
	axios.get("https://api.github.com/users/" + element)
		.then(response => {
			console.log(response.data);
			const container = document.querySelector(".cards");
			container.append(card(response.data))
		}).catch(error => {
			console.log("errors");
		})
});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

