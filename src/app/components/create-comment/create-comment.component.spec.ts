// there is some karma/browser disconnect issue when running this test

// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { TalkMoment } from '../../models/talk-moment.model';
// import { Comment } from '../../models/comment.model';
// import { CommentsService } from '../../services/comments.service';
// import { CommentsProxyService } from '../../services/comments-proxy.service';
// import { CreateCommentComponent } from './create-comment.component';

// class CommentsServiceMock {
//   save() { }
//   getAll() { return []; }
//   deleteComment() { }
//   saveAll() { }
// }

// const commentMock = new Comment();
// commentMock.text = 'this is a comment';
// commentMock.talkMoment = new TalkMoment(12233, 4232, '12:05');

// fdescribe('CreateCommentComponent', () => {
//   let component: CreateCommentComponent;
//   let fixture: ComponentFixture<CreateCommentComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [FormsModule],
//       declarations: [CreateCommentComponent],
//       providers: [
//         { provide: CommentsService, useClass: CommentsServiceMock },
//         CommentsProxyService
//       ]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CreateCommentComponent);
//     component = fixture.componentInstance;
//     component.talkMoment = commentMock.talkMoment;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
