import { Tweet } from '../models/tweet';

export class TweetDatabase {
    tweets: Tweet[];

    constructor() {
        this.tweets = [];
    }

    addTweet(tweet: Tweet): void {
        this.tweets.push(tweet);
    }

    getTweets(): Tweet[] {
        return this.tweets;
    }
}
