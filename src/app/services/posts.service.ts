import { Injectable } from '@angular/core';
import {IPost} from '../types/post';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public posts: IPost[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum ex explicabo, fugit, illum labore minima molestiae',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum ex explicabo, fugit, illum labore minima molestiae',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum ex explicabo, fugit, illum labore minima molestiae',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon quatrième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum ex explicabo, fugit, illum labore minima molestiae',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon cinquième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum ex explicabo, fugit, illum labore minima molestiae',
      loveIts: 1,
      created_at: new Date()
    }
  ];

  public posts$: BehaviorSubject<IPost[]>;

  constructor() {
    this.posts = this.posts.sort(this.sortPosts);
    this.posts$ = new BehaviorSubject<IPost[]>(this.posts);
  }

  public addPost(title: string, content: string) {
    if (title && content) {
      this.posts.push({
        title,
        content,
        loveIts: 0,
        created_at: new Date()
      });
      this.posts = this.posts.sort(this.sortPosts);
      this.posts$.next(this.posts);
    }
  }

  public deletePost(index: number) {
    this.posts.splice(index, 1);
    this.posts$.next(this.posts);
  }

  public loveIt(index: number) {
    this.posts[index].loveIts++;
    this.posts = this.posts.sort(this.sortPosts);
    this.posts$.next(this.posts);
  }

  public dontLoveIt(index: number) {
    this.posts[index].loveIts--;
    this.posts = this.posts.sort(this.sortPosts);
    this.posts$.next(this.posts);
  }

  public sortPosts = (a: IPost, b: IPost) => {
      if (a.loveIts > b.loveIts) {
        return -1;
      } else {
        return 1;
      }
  }

}
