class Meal {

    _name = '';
    _category = '';
    _origin = '';
    _country = '';
    _pictures = new MealPictures();
    _description = '';

    constructor(name, category, origin, country, description) {
        this._name = name;
        this._category = category;
        this._origin = origin;
        this._country = country;
        this._description = description;
    }


    get name() {
        return this._name;
    }

    get picture() {
        return this._picture;
    }

    get category() {
        return this._category;
    }

    get origin() {
        return this._origin;
    }

    get country() {
        return this._country;
    }

    get picture() {
        return this._pictures;
    }

    get description() {
        return this._description;
    }

    toString() {
        return `
            
                <li id= meal-li>${this._pictures}</li>
            
        `;
    }
}
/*
 <li>
        Name: ${this._name}
        <br>
        Category: ${this._category}
        <br>
        Origin: ${this._origin}
        <br>
        Country: ${this._country}
        <br>
        ${this._picture}
        <br>
        Description: ${this._description}
        </li>

*/