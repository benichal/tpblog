import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {PostService} from './services/Post.service';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'posts', component: PostListComponent },
    { path: 'new', component: NewPostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
      PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
