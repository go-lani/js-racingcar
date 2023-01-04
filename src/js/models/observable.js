import { NotAllowedError } from "../utils/error.js";
import { CAR_MODEL_INITIAL_STATE } from "../utils/constants.js";

class Observable {
  #state;
  constructor(initialState) {
    this.#state = initialState;
    this.observers = [];
  }

  get state() {
    return this.#state;
  }

  set state(newState) {
    this.#state = newState;
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(
      (subscriber) => subscriber !== observer
    );
  }

  dispatch(type) {
    if (this.observers.length === 0) {
      throw new NotAllowedError("옵저버가 존재하지 않습니다.");
    }
    this.observers.forEach((observer) => observer.action(type, this.#state));
  }

  reset() {
    this.#state = JSON.parse(JSON.stringify(CAR_MODEL_INITIAL_STATE));
  }
}

export default Observable;
