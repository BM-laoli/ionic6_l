import { makeAutoObservable } from "mobx";

export type HomeState = {
  count: number;
};

export class HomeStore  {
  count = 0;

  constructor() {
    makeAutoObservable(this)
  }

  fetchCount = () => {
    this.count = this.count + 1
  };

}
