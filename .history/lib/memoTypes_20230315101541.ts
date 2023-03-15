export interface CalendarReturn {
  recallOne: string;
  recallTwo: string;
  recallThree: string;
  recallFour: string;
  recallFive: string;
  recallSix: string;
  recallSeven: string;
  recallEight: string;
  recallNine: string;
  recallTen: string;
}
export type Calendar = () => CalendarReturn;

export type IsMemoTime = (memoDate: MemoDateData) => boolean;

export interface MemoDateData {
  lastRecallDay: string;
  nextRecallDay: string;
  calendar: CalendarReturn;
}
export type MemoDate = () => MemoDateData;

export type MemoParser = (memoDateStr: string) => MemoDate;
