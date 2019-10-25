class MealPictures {
    meals = []

    addMeal(meal) {
        let mealImage = `<img src="${meal}">`
        this.meals.push(mealImage);
    }

    toString() {
        return `
            ${this.meals.join(' ')}
        `
    }
}