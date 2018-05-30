import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import Post from '../models/Post.model';
import {PostService} from '../services/Post.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.postSubscription = this.postService.postSubject.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        );
        this.postService.emitPostSubject();
    }

    ngOnDestroy() {
      this.postSubscription.unsubscribe();
    }

}
