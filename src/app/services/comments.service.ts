import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
import * as _ from 'lodash';

@Injectable()
export class CommentsService {

  constructor() { }

  save(comment: Comment) {

    const comments = this.getAll();

    comments.push(comment);

    return this.saveAll(comments);

  }

  getAll() {
    const comments = localStorage.getItem('comments');
    return (comments !== null) ? JSON.parse(comments) : [];
  }

  deleteComment(comment) {

    const comments = this.getAll();

    _.remove(comments, comment);

    this.saveAll(comments);
  }

  saveAll(comments: Comment[]) {
    return localStorage.setItem('comments', JSON.stringify(comments));
  }
}
