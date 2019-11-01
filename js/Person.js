class Person { //Person superclass, made for creating admins and users as subclasses


    _userName = '';
    _email = '';
    _password = '';
    _repeatPassword = '';



    constructor(userName, email, password, repeatPassword) {
        this._userName = userName;
        this._email = email;
        this._password = password;
        this._repeatPassword = repeatPassword;
    }

    get userName() {
        return this._userName;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get repeatPassword() {
        return this._repeatPassword;
    }
}