export type Object = {
  x: number;
  y: number;
};
export type Background = Object;
export type Player = Object;

export type Condition = {
  pressed: boolean;
};

export enum Direction {
  w,
  a,
  s,
  d,
}
export type Keys = {
  [key in keyof typeof Direction]: Condition;
};

export type Game = {
  isStarted: boolean;
  backgroundImage: null | HTMLImageElement;
  playerImage: null | HTMLImageElement;
};
