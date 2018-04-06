import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { CommentsProxyService } from '../../services/comments-proxy.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent implements OnInit {

  @Input() comment: Comment;
  public comments: Comment[];

  constructor(
    public commentsService: CommentsService,
    public commentsProxyService: CommentsProxyService
  ) { }

  ngOnInit() {
    this.getAll();
    this.commentsProxyService.postedComment$.subscribe(
      comment => (comment) ? this.comments.push(comment) : ''
    );
  }

  deleteComment(comment) {
    this.commentsService.deleteComment(comment);
    this.getAll();
  }

  getAll() {
    this.comments = this.commentsService.getAll();
  }

}
