class MealImage { //meal picture class with composition. 
    _picture = new MealPictures();

    get picture() {
        return this._picture;
    }


    toString() {
        return `<li id="meal-li">${this._picture}</li>`
    }
}
