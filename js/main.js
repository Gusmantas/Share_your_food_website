// User sign-up, and pushing users to array
let users = [];
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let repeatPassword = document.querySelector("#psw-repeat");
let submitButton = document.querySelector("#submit-user");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
document.querySelector("#submit-user").disabled = false;

//Validating sign-up form if fields are empty
if (userName.value == '' || email.value == '' || password.value == '' || repeatPassword.value == '') {
    document.querySelector("#submit-user").disabled = true;
} else {
    document.querySelector("#submit-user").disabled = false;
}

//Validating email (status displayed in email label (on keystroke))
let emailLabel = document.querySelector("#email_label");
email.addEventListener('input', inputEmail);

function inputEmail(e) {
    e.preventDefault();
    let input = e.target.value;

    if (input && /(^\w.*@\w+\.\w)/.test(input)) {
        emailLabel.textContent = 'Valid Email!';
        emailLabel.classList.add('success');
        emailLabel.classList.remove('failure');
        document.querySelector("#submit-user").disabled = false;
    } else {
        emailLabel.textContent = 'Keep Going...';
        emailLabel.classList.remove('success');
        emailLabel.classList.add('failure');
        document.querySelector("#submit-user").disabled = true;

    }
}

//Validating username (if username taken, status displayed in username label (on keystroke))
let userNameLabel = document.querySelector("#username_label");
userName.addEventListener('input', checkUsername);

function checkUsername(e) {
    e.preventDefault();
    for (let user of users) {
        if (userName.value === user.userName) {
            userNameLabel.textContent = 'Username already in use!';
            userNameLabel.classList.remove('success');
            userNameLabel.classList.add('failure');
            document.querySelector("#submit-user").disabled = true;
        } else {
            userNameLabel.textContent = 'Valid username!';
            userNameLabel.classList.add('success');
            userNameLabel.classList.remove('failure');
            document.querySelector("#submit-user").disabled = false;

        }
    }
}

// Validating password (match with repeatPassword. Status displayed in repat password label (on keystroke))
let repeatPasswordLabel = document.querySelector("#psw_repeat_label");
repeatPassword.addEventListener('input', checkPassword);

function checkPassword(e) {
    e.preventDefault();
    if (password.value !== repeatPassword.value) {
        repeatPasswordLabel.textContent = 'Password do not match!';
        repeatPasswordLabel.classList.remove('success');
        repeatPasswordLabel.classList.add('failure');
        document.querySelector("#submit-user").disabled = true;
    } else {
        repeatPasswordLabel.textContent = 'Password correct!';
        repeatPasswordLabel.classList.add('success');
        repeatPasswordLabel.classList.remove('failure');
        document.querySelector("#submit-user").disabled = false;
    }

}


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
    repeatPassword.value = '';
    firstName.value = '';
    lastName.value = '';

    // Hide sign-up form when clicking submit button
    document.querySelector("#signup-form").style.display = 'none';
}

// Pop-up "sign-up form" window. Appears when clicking "sign-up" button in navigation bar
let signupButton = document.querySelector("#sign-up");
signupButton.onclick = function () {
    // Resets inpuf field labels to original text (else labels show validation status)
    emailLabel.textContent = 'Email:';
    userNameLabel.textContent = 'User name:';
    repeatPasswordLabel.textContent = 'Repeat Password:'
    document.querySelector("#signup-form").style.display = 'block';
}

//Pop-up "sign in form" window. Appears when clicking  "sign-in" button in navigation bar
let signinButton = document.querySelector("#sign-in");
signinButton.onclick = function () {
    document.querySelector("#signin_form").style.display = 'block';
}

//Clicking Sign-in button in "sign-in" form
let submitSigninButton = document.querySelector("#submit-signin_form");
let usernameOnSignin = document.querySelector("#username_signin");
let passwordOnSignin = document.querySelector("#password_signin");
let welcomeUser = document.querySelector("#welcome_user");


submitSigninButton.onclick = function (event) {
    event.preventDefault();
    for (let user of users) {
        //If password and username maches, "welcome user" text displayed under page heading.
        if (usernameOnSignin.value === user.userName && passwordOnSignin.value === user.password) {
            welcomeUser.innerHTML = `Welcome, ${usernameOnSignin.value}!`
            document.querySelector("#signin_form").style.display = 'none';

        } else {
            alert('Username or pasword incorrect!');
        }
    }
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


// Event delegation. Adding event listener on yet-to-be-created DOM element.
let mealListParent = document.querySelector("#meal-list");
//Accessing dynamically created <li> tag.
let mealImgObject = document.querySelector(`#mealName.value`);
mealListParent.addEventListener('click', onClickedImage);
//Accessing <div> tag, where meal object information will be defined.
displayMealObjectInDom = document.querySelector("#meal-object");

//Clicking image displays its information (about meal)
function onClickedImage(e) {
    for (let meal of mealObjects) {
        displayMealObjectInDom.style.display = 'block';
        // Checking if meal object name is equal to dynamically created <li> tag
        if (meal.name == e.target.id) {
            displayMealObjectInDom.innerHTML = `<div id="current-meal">
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

