import { TweetDatabase } from "./database/tweet.database";
import { UserDatabase } from "./database/user.database";


const userManager = new UserDatabase();
const tweetManager = new TweetDatabase();

const user1 = userManager.createUser("Alice", "alice@example.com", "alice123", "password123");
const user2 = userManager.createUser("Bob", "bob@example.com", "bob123", "password456");
const user3 = userManager.createUser("Charlie", "charlie@example.com", "charlie123", "password789");

if (user1 && user2 && user3) {
    user1.follow(user2);
    user1.follow(user3);
    user1.follow(user1);
    user1.follow(user2);

    const tweet1 = user1.createTweet("Hello, world!", "normal");
    tweetManager.addTweet(tweet1);

    const tweet2 = user2.createTweet("Hi there!", "normal");
    tweetManager.addTweet(tweet2);

    const tweet3 = user3.createTweet("Good morning!", "normal");
    tweetManager.addTweet(tweet3);

    user1.likeTweet(tweet2);
    user2.likeTweet(tweet1);
    user3.likeTweet(tweet1);
    user2.likeTweet(tweet3);
    user3.likeTweet(tweet2);

    const reply1 = user1.replyToTweet(tweet2, "Hello, Bob!");
    const reply2 = user2.replyToTweet(tweet1, "Hi, Alice!");
    const reply3 = user3.replyToTweet(tweet2, "Good to see you, Bob!");
    
    tweet1.displayTweet();
    tweet2.displayTweet();
    tweet3.displayTweet();
    user1.listFollowing();

    user1.displayFeed();
    user2.displayFeed();
    user3.displayFeed();
} else {
    console.log("Failed to create one or more users.");
}

userManager.displayAllUsers();
