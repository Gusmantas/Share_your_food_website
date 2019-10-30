// User sign-up, and pushing users to array
let users = [];
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let repeatPassword = document.querySelector("#psw-repeat");
let submitButton = document.querySelector("#submit-user");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");

//Clicking "submit" when creating new user
submitButton.onclick = function (event) {
    event.preventDefault();

    let newUser = new User(userName.value, email.value, password.value, repeatPassword.value, firstName.value, lastName.value);
    users.push(newUser);

    console.log(users);

// Clear all inputs
    userName.value = '';
    email.value = '';
    password.value = '';
    repeatPassword = '';
    firstName.value = '';
    lastName.value = '';

    // Hide sign-up form
    document.querySelector("#signup-form").style.display = 'block';
}

// Pop-up "sign-up form" window. Appears when clicking on "sign-up" button in navigation bar
let signupButton = document.querySelector("#sign-up");
signupButton.onclick = function () {
    document.querySelector("#signup-form").style.display = 'block';
}


//"Add meal" form. Pushing meals and pictures to different arrays. Displaying image on main page.

let mealPictures = [];
let mealObjects = [];
let mealName = document.querySelector("#meal-name");
let mealCategory = document.querySelector("#category");
let mealOrigin = document.querySelector("#meal-origin");
let mealCountry = document.querySelector("#meal-country");
let mealPicture = document.querySelector("#add-picture");
let mealDescription = document.querySelector("#meal-description");
let displayImages = document.querySelector("#meal-list");
let submitMeal = document.querySelector("#submit-meal");
let activeMealImage = '';


submitMeal.onclick = function (event) {
    //Creating seperate arrays. One for meal images, other for meal objects.
    let newImage = new MealImage(mealPicture.value);
    let mealInfo = new MealObject(mealName.value, mealCategory.value, mealOrigin.value, mealCountry.value, mealDescription.value);

    //Stopping page from reloading.
    event.preventDefault();
    newImage._picture.addMealImg(activeMealImage);

    //meal images are being pushed to array
    mealPictures.push(newImage);

    //meal objects (input field values) being pushed to array
    mealObjects.push(mealInfo);

    displayImages.innerHTML = mealPictures;

    console.log(mealObjects);

    // Clear all inputs
    mealName.value = '';
    mealCategory.value = '';
    mealOrigin.value = '';
    mealCountry.value = '';
    mealPicture.value = '';
    mealDescription.value = '';
//hide add meal form
    document.querySelector("#add-meals").style.display = 'none';
}



//Pop-up "add-meal" window
let addMealButton = document.querySelector("#show-meal-form");
addMealButton.onclick = function () {
    document.querySelector("#add-meals").style.display = 'block';
}


// Converting image URL to object to be displayed on main page.
mealPicture.onchange = function (event) {
    activeMealImage = URL.createObjectURL(event.target.files[0]);
}

//Event listener on added meal image
// Event delegation. Adding event listener on yet-to-be-created DOM element.
let mealListParent = document.querySelector("#meal-list");
//Accessing dynamically created <li> tag.
let mealImgObject = document.querySelector(`#mealName.value`);
mealListParent.addEventListener('click', onClickedImage);
//Accessing <div> tag where meal object information will be defined.
displayMealObjectInDom = document.querySelector("#meal-object");

function onClickedImage(e) {
    for(let meal of mealObjects){

        displayMealObjectInDom.style.display = 'block';
        // Checking if meal object name is equal to dynamically created <li> tag
        if(meal.name == e.target.id){
            displayMealObjectInDom.innerHTML = `<div>
                                                    <strong>Name:</strong> ${meal.name}
                                                    <br> <br>
                                                    <strong>Category:</strong> ${meal.category}
                                                    <br> <br>
                                                    <strong>Origin:</strong> ${meal.origin}
                                                    <br> <br>
                                                    <strong>Country:</strong> ${meal.country}
                                                    <br> <br>
                                                    <strong>Description:</strong> ${meal.description}
                                                </div>`;
            
        }
        
    }
}

          


