"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tweet_1 = require("./tweet");
class User {
    constructor(name, email, username, password) {
        this.id = User.nextId++;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.tweets = [];
        this.following = [];
    }
    follow(user) {
        if (user === this) {
            console.log("Você não pode seguir a si mesmo.");
            return;
        }
        if (!this.following.includes(user)) {
            this.following.push(user);
        }
        else {
            console.log(`Você já está seguindo ${user.username}.`);
        }
    }
    createTweet(content, type) {
        const tweet = new tweet_1.Tweet(this, content, type);
        this.tweets.push(tweet);
        return tweet;
    }
    likeTweet(tweet) {
        tweet.addLike(this);
    }
    replyToTweet(tweet, content) {
        const reply = tweet.reply(content, this);
        this.tweets.push(reply);
        return reply;
    }
    displayUserDetails() {
        console.log(`User: ${this.name} (${this.username})`);
        console.log(`Email: ${this.email}`);
        console.log(`Tweets:`);
        this.tweets.forEach(tweet => {
            tweet.displayTweet();
        });
        console.log(`Following: ${this.following.map(user => user.username).join(", ")}`);
    }
    listFollowing() {
        console.log(`Usuários que ${this.username} segue:`);
        this.following.forEach(user => {
            console.log(`- ${user.username}`);
        });
    }
    displayFeed() {
        console.log(`Feed de ${this.username}:`);
        this.tweets.forEach(tweet => {
            tweet.displayTweet();
            console.log('------------------------');
        });
        this.following.forEach(user => {
            user.tweets.forEach(tweet => {
                tweet.displayTweet();
                console.log('------------------------');
            });
        });
    }
}
exports.User = User;
User.nextId = 1;
