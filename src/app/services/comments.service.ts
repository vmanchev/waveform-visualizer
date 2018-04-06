import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';

@Injectable()
export class CommentsService {

  constructor() { }

  save(comment: Comment) {

    const comments = this.getAll();

    comments.push(comment);

    return localStorage.setItem('comments', JSON.stringify(comments));

  }

  getAll() {
    const comments = localStorage.getItem('comments');
    return (comments !== null) ? JSON.parse(comments) : [];
  }
}
