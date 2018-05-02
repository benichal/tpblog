import { Component } from '@angular/core';
import Post from '../classes/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Array<Post>;

  constructor() {
      this.posts = [];
      this.posts.push(new Post('Mon premier post'));
      this.posts.push(new Post('Mon deuxième post'));
      this.posts.push(new Post('Encore un post'));
  }
}

