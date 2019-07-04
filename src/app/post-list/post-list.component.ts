import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPost} from '../types/post';
import {PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  public posts: IPost[];
  public posts$: Subscription;

  constructor(public postsServices: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postsServices.posts$.subscribe((posts: IPost[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.posts$.unsubscribe();
  }

}
