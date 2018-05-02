import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

    @Input() title: string;
    @Input() content: string;
    @Input() loveIts: number;
    @Input() created_at: Date;

  constructor() {
      this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis';
      this.loveIts = 0;
      this.created_at = new Date();
  }

  ngOnInit() {
  }

  addLoveIt() {
    this.loveIts = this.loveIts + 1;
  }

  addDontLoveIt() {
      this.loveIts = this.loveIts - 1;
  }
}
