class User extends Person { //Inheritance

    _firstName = '';
    _lastName = '';

    constructor(userName, email, password, repeatPassword, firstName, lastName) {
        super(userName, email, password, repeatPassword);
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }


}