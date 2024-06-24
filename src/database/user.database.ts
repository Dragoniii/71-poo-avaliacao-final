import { User } from '../models/user';

export class UserDatabase {
    users: User[];

    constructor() {
        this.users = [];
    }

    createUser(name: string, email: string, username: string, password: string): User | null {
        if (this.isUsernameUnique(username)) {
            const user = new User(name, email, username, password);
            this.users.push(user);
            return user;
        } else {
            console.log(`Username "${username}" is already taken.`);
            return null;
        }
    }

    isUsernameUnique(username: string): boolean {
        return !this.users.some(user => user.username === username);
    }

    displayAllUsers(): void {
        this.users.forEach(user => {
            user.displayUserDetails();
        });
    }
}
