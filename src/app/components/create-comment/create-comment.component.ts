import { Component, Input, Output, OnChanges } from '@angular/core';
import { TalkMoment } from '../../models/talk-moment.model';
import { Comment } from '../../models/comment.model';
import { CommentsService } from '../../services/comments.service';
import { CommentsProxyService } from '../../services/comments-proxy.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnChanges {

  @Input() talkMoment: TalkMoment;
  public commentText: string;
  @Output() comment: Comment;

  constructor(
    public commentsService: CommentsService,
    public commentsProxyService: CommentsProxyService
  ) { }

  ngOnChanges() {
    this.comment = new Comment();
    this.comment.talkMoment = this.talkMoment;
  }

  onSubmit(e) {

    if (!this.comment.text || this.comment.text.trim().length === 0) {
      return;
    }

    this.commentsService.save(this.comment);
    this.commentsProxyService.set(this.comment);

    this.comment = new Comment();
    this.comment.talkMoment = this.talkMoment;
  }

}
