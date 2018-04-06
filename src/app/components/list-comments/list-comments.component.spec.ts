import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, fakeAsync, flush, ComponentFixture, TestBed } from '@angular/core/testing';
import { Comment } from '../../models/comment.model';
import { TalkMoment } from '../../models/talk-moment.model';
import { CommentsService } from '../../services/comments.service';
import { CommentsProxyService } from '../../services/comments-proxy.service';
import { ListCommentsComponent } from './list-comments.component';

class CommentsServiceMock {
  save() { }
  getAll() { return []; }
  deleteComment() { }
  saveAll() { }
}

const commentMock = new Comment();
commentMock.text = 'this is a comment';
commentMock.talkMoment = new TalkMoment(12233, 4232, '12:05');

describe('ListCommentsComponent', () => {
  let component: ListCommentsComponent;
  let fixture: ComponentFixture<ListCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListCommentsComponent],
      providers: [
        { provide: CommentsService, useClass: CommentsServiceMock },
        CommentsProxyService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'getAll').and.callThrough();
    spyOn(component.commentsService, 'deleteComment').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {

    beforeEach(() => {
      component.ngOnInit();
    });

    it('should try to get all the comments', () => {
      expect(component.getAll).toHaveBeenCalled();
    });

    it('should add a comment to the list if new comment was posted', fakeAsync(() => {
      component.commentsProxyService.set(commentMock);

      flush();
      fixture.detectChanges();

      expect(component.comments.length > 0).toBeTruthy();

    }));

  });

  describe('deleteComment', () => {
    it('should delete the selected comment', () => {
      component.deleteComment(commentMock);

      expect(component.commentsService.deleteComment).toHaveBeenCalledWith(commentMock);
    });
  });

});
