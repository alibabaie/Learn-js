
class User {

    constructor (username,email) {

        this.username = username;
        this.email = email;
    }

    // Instance Methods......................
    getInfo () {

        return `نام کاربری : ${this.username} , ایمیل : ${this.email}`;
    }

    // Stattic Methods.......................

    static validateEmail (email) {

        if (!email || !email.trim() == '') return false;
        if (!email.includes('@')) return false;

        return true;
    }
}

const user1 = new User ("ali babaie",'ali@gmail.com');
const user2 = new User ("amir hossain babaie",'amir hossain@gmail.com');

user1.getInfo();
user2.getInfo();
//user1.validateEmail();