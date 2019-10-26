// User sign-up, and pushing users to array
let users = [];
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let repeatPassword = document.querySelector("#psw-repeat");
let submitButton = document.querySelector("#submit-user");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name")

submitButton.onclick = function (event) {
    event.preventDefault();

    let newUser = new User(userName.value, email.value, password.value, repeatPassword.value, firstName.value, lastName.value);
    users.push(newUser);

    console.log(users);


    userName.value = '';
    email.value = '';
    password.value = '';
    repeatPassword = '';
    firstName.value = '';
    lastName.value = '';
    // Hide sign-up form
    document.querySelector("#signup-form").style.display = 'block';
}

// Pop-up "sign-up form" window
let signupButton = document.querySelector("#sign-up")
signupButton.onclick = function () {
    document.querySelector("#signup-form").style.display = 'block';
}


//Add meal form, and pushing meals to array, show image on main page

let meals = [];
let mealName = document.querySelector("#meal-name");
let mealCategory = document.querySelector("#category");
let mealOrigin = document.querySelector("#meal-origin");
let mealCountry = document.querySelector("#meal-country");
let mealPicture = document.querySelector("#add-picture");
let mealDescription = document.querySelector("#meal-description");
let displayMeals = document.querySelector("#meal-list");
let submitMeal = document.querySelector("#submit-meal");
let activeMealImage = '';


submitMeal.onclick = function (event) {
    newMeal = new Meal(mealName.value, mealCategory.value, mealOrigin.value, mealCountry.value, mealPicture.value, mealDescription.value);
    event.preventDefault();
    newMeal._pictures.addMeal(activeMealImage)
    meals.push(newMeal);

    displayMeals.innerHTML = meals
    console.log(meals)

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
let addmealButton = document.querySelector("#show-meal-form");
addmealButton.onclick = function () {
    document.querySelector("#add-meals").style.display = 'block';
}


// Display added image in webpage
mealPicture.onchange = function (event) {
    activeMealImage = URL.createObjectURL(event.target.files[0]);
}

//Event listener on added meal image

mealListParent = document.querySelector("#meal-list");
mealListParent.addEventListener('click', onClickedImage);
function onClickedImage(e) {
    console.log(newMeal);
}








