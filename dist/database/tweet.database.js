"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetDatabase = void 0;
class TweetDatabase {
    constructor() {
        this.tweets = [];
    }
    addTweet(tweet) {
        this.tweets.push(tweet);
    }
    getTweets() {
        return this.tweets;
    }
}
exports.TweetDatabase = TweetDatabase;
