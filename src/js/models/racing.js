import Observable from "./observable.js";
import { CAR_MODEL_INITIAL_STATE } from "../utils/constants.js";

class RacingModel extends Observable {
  constructor() {
    super(CAR_MODEL_INITIAL_STATE);
    this.state = super.state;
  }

  reset() {
    super.reset();
  }
}

export default RacingModel;
