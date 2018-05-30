import Post from '../models/Post.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PostService {

    postSubject = new Subject<Post[]>();

    defaultContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis';
    defaultLoveIts = 0;
    defaultDate = new Date();

    private posts = [
        new Post('Mon premier post', this.defaultContent, this.defaultLoveIts, this.defaultDate),
        new Post('Mon deuxième post', this.defaultContent, this.defaultLoveIts, this.defaultDate),
        new Post('Encore un post', this.defaultContent, this.defaultLoveIts, this.defaultDate)
    ];

    constructor() {}

    emitPostSubject() {
        this.postSubject.next(this.posts.slice());
    }

    addLoveIt(index: number) {
        this.posts[index].loveIts = this.posts[index].loveIts + 1;
        this.emitPostSubject();
    }

    addDontLoveIt(index: number) {
        this.posts[index].loveIts = this.posts[index].loveIts - 1;
        this.emitPostSubject();
    }

    addPost(title, content) {
        this.posts.push(new Post(title, content, this.defaultLoveIts, new Date()));
        this.emitPostSubject();
    }

    deletePost(index: number) {
        this.posts.splice(index, 1);
        this.emitPostSubject();
    }
}
