import { TestBed, inject } from '@angular/core/testing';
import { Comment } from '../models/comment.model';
import { TalkMoment } from '../models/talk-moment.model';
import { CommentsService } from './comments.service';


const commentMock = new Comment();
commentMock.text = 'this is a comment';
commentMock.talkMoment = new TalkMoment(12233, 4232, '12:05');

describe('CommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsService]
    });
  });

  it('should be created', inject([CommentsService], (service: CommentsService) => {
    expect(service).toBeTruthy();
  }));

  describe('save', () => {

    beforeEach(() => {
      localStorage.removeItem('comments');
    });

    it('should add a comment to the storage', inject([CommentsService], (service: CommentsService) => {
      service.save(commentMock);
      expect(service.getAll().length).toEqual(1);

      service.save(commentMock);
      expect(service.getAll().length).toEqual(2);
    }));
  });

  describe('getAll', () => {

    beforeEach(() => {
      localStorage.removeItem('comments');
    });

    it('should return an empty array when there are no comments', inject([CommentsService], (service: CommentsService) => {
      expect(service.getAll()).toEqual([]);
    }));

    it('should return array of comments, when there are already some comments in the storage',
      inject([CommentsService], (service: CommentsService) => {
        service.save(commentMock);
        service.save(commentMock);
        expect(service.getAll().length).toEqual(2);
      }));
  });

  describe('deleteComment', () => {

    beforeEach(() => {
      localStorage.removeItem('comments');
    });

    it('should save an empty array if there are no comments and method was called',
      inject([CommentsService], (service: CommentsService) => {
        service.deleteComment(commentMock);
        expect(service.getAll()).toEqual([]);
      }));

    it('should delete the selected comment', inject([CommentsService], (service: CommentsService) => {
      service.save(commentMock);

      const secondComment = Object.assign({}, commentMock);
      secondComment.text = 'another comment';
      service.save(secondComment);

      expect(service.getAll().length).toEqual(2);

      service.deleteComment(secondComment);

      expect(service.getAll().length).toEqual(1);
    }));

  });
});
