import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public alert: object;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm) {
    if (form.value.title && form.value.content) {
      this.postsService.addPost(form.value.title, form.value.content);
      this.alert = {text: 'La post a été ajouté avec succès.', class: 'alert-success'};
    } else {
      this.alert = {text: 'Le formulaire doit être rempli dans son intégralité.', class: 'alert-danger'};
    }
  }

}
