"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
class Tweet {
    constructor(author, content, type) {
        this.id = Tweet.nextId++;
        this.author = author;
        this.content = content;
        this.type = type;
        this.replies = [];
        this.likes = [];
    }
    addLike(user) {
        if (!this.likes.includes(user)) {
            this.likes.push(user);
        }
    }
    reply(content, author) {
        const reply = new Tweet(author, content, "reply");
        this.replies.push(reply);
        return reply;
    }
    displayTweet() {
        console.log(`@${this.author.username}: ${this.content}`);
        if (this.likes.length === 1) {
            console.log(`@${this.likes[0].username} curtiu`);
        }
        else if (this.likes.length > 1) {
            console.log(`@${this.likes[0].username} e mais ${this.likes.length - 1} usuários curtiram`);
        }
        this.replies.forEach(reply => {
            console.log(`  > @${reply.author.username}: ${reply.content}`);
        });
    }
}
exports.Tweet = Tweet;
Tweet.nextId = 1;
