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
}


//Add meal form, and pushing meals to array

meals = [];
let mealName = document.querySelector("#meal-name");
let mealCategory = document.querySelector("#category");
let mealOrigin = document.querySelector("#meal-origin");
let mealCountry = document.querySelector("#meal-country");
let mealPicture = document.querySelector("#add-picture");
let mealDescription = document.querySelector("#meal-description");
let displayMeals = document.querySelector("#meal-list");

let submitMeal = document.querySelector("#submit-meal");

submitMeal.onclick = function (event) {
    event.preventDefault();
    
    let newMeal = new Meal(mealName.value, mealCategory.value, mealOrigin.value, mealCountry.value, mealPicture.value, mealDescription.value);

    meals.push(newMeal);

    displayMeals.innerHTML = meals;
    
  
    console.log(meals)

    mealName.value = '';
    mealCategory.value = '';
    mealOrigin.value = '';
    mealCountry.value = '';
    mealPicture.value = '';
    mealDescription.value = '';
}


 
