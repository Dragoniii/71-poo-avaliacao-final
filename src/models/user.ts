import { Tweet } from "./tweet";

export class User {
    static nextId = 1;
    id: number;
    name: string;
    email: string;
    username: string;
    password: string;
    tweets: Tweet[];
    following: User[];

    constructor(name: string, email: string, username: string, password: string) {
        this.id = User.nextId++;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.tweets = [];
        this.following = [];
    }

    follow(user: User): void {
        if (user === this) {
            console.log("Você não pode seguir a si mesmo.");
            return;
        }
        if (!this.following.includes(user)) {
            this.following.push(user);
        } else {
            console.log(`Você já está seguindo ${user.username}.`);
        }
    }

    createTweet(content: string, type: "normal" | "reply"): Tweet {
        const tweet = new Tweet(this, content, type);
        this.tweets.push(tweet);
        return tweet;
    }

    likeTweet(tweet: Tweet): void {
        tweet.addLike(this);
    }

    replyToTweet(tweet: Tweet, content: string): Tweet {
        const reply = tweet.reply(content, this);
        this.tweets.push(reply);
        return reply;
    }

    displayUserDetails(): void {
        console.log(`User: ${this.name} (${this.username})`);
        console.log(`Email: ${this.email}`);
        console.log(`Tweets:`);
        this.tweets.forEach(tweet => {
            tweet.displayTweet();
        });
        console.log(`Following: ${this.following.map(user => user.username).join(", ")}`);
    }

    listFollowing(): void {
        console.log(`Usuários que ${this.username} segue:`);
        this.following.forEach(user => {
            console.log(`- ${user.username}`);
        });
    }

    displayFeed(): void {
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
