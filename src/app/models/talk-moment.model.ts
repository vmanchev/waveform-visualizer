export class TalkMoment {
  currentMoment: number;
  currentPosition: number;
  timeLabel: number;

  constructor(currentMoment, currentPosition, timeLabel) {
    this.currentMoment = currentMoment;
    this.currentPosition = currentPosition;
    this.timeLabel = timeLabel;
  }
}
