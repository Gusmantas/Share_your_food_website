class MealPictures {
    pictures = []

    addMeal(meal) {
        let mealName = document.querySelector("#meal-name");
        let mealImage = `<img id="${mealName.value}" src="${meal}">`
        this.pictures.push(mealImage);
    }

    toString() {
        return `
        ${this.pictures}
        `
    }
}