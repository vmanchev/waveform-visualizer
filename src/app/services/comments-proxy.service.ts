import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Comment } from '../models/comment.model';

@Injectable()
export class CommentsProxyService {

  private postedCommentSource = new BehaviorSubject<Comment>(null);
  postedComment$ = this.postedCommentSource.asObservable();

  set(comment: Comment) {
    this.postedCommentSource.next(comment);
  }
}
