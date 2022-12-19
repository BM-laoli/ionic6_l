import { makeAutoObservable } from "mobx";

export class AboutStore {
  count = 0;
  name = "";

  async fetchName() {
    // const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/name`);
    // const name = await res.text();
    const name = "AboutStore";
    this.name = name;
    console.log("about", name);
  }

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }
}
