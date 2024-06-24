"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase = void 0;
const user_1 = require("../models/user");
class UserDatabase {
    constructor() {
        this.users = [];
    }
    createUser(name, email, username, password) {
        if (this.isUsernameUnique(username)) {
            const user = new user_1.User(name, email, username, password);
            this.users.push(user);
            return user;
        }
        else {
            console.log(`Username "${username}" is already taken.`);
            return null;
        }
    }
    isUsernameUnique(username) {
        return !this.users.some(user => user.username === username);
    }
    displayAllUsers() {
        this.users.forEach(user => {
            user.displayUserDetails();
        });
    }
}
exports.UserDatabase = UserDatabase;
