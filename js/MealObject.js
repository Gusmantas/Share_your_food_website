class MealObject {

    _name = '';
    _category = '';
    _origin = '';
    _country = '';
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

    get category() {
        return this._category;
    }

    get origin() {
        return this._origin;
    }

    get country() {
        return this._country;
    }

    get description() {
        return this._description;
    }

    toString() {
        `<li>
            Name: ${this._name}
            <br>
            Category: ${this._category}
            <br>
            Origin: ${this._origin}
            <br>
            Country: ${this._country}
            <br>
            Description: ${this._description}
        </li>`
    }
}