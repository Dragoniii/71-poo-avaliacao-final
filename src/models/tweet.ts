import { User } from './user';

export class Tweet {
    static nextId = 1;
    id: number;
    content: string;
    type: "normal" | "reply";
    author: User;
    replies: Tweet[];
    likes: User[];

    constructor(author: User, content: string, type: "normal" | "reply") {
        this.id = Tweet.nextId++;
        this.author = author;
        this.content = content;
        this.type = type;
        this.replies = [];
        this.likes = [];
    }

    addLike(user: User): void {
        if (!this.likes.includes(user)) {
            this.likes.push(user);
        }
    }

    reply(content: string, author: User): Tweet {
        const reply = new Tweet(author, content, "reply");
        this.replies.push(reply);
        return reply;
    }

    displayTweet(): void {
        console.log(`@${this.author.username}: ${this.content}`);
        if (this.likes.length === 1) {
            console.log(`@${this.likes[0].username} curtiu`);
        } else if (this.likes.length > 1) {
            console.log(`@${this.likes[0].username} e mais ${this.likes.length - 1} usuários curtiram`);
        }
        this.replies.forEach(reply => {
            console.log(`  > @${reply.author.username}: ${reply.content}`);
        });
    }
}
