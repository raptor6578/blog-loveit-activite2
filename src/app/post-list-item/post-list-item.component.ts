import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../types/post';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: IPost;
  @Input() index: number;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

}
