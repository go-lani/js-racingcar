export const ERROR_MESSAGES = {
  NOT_ALLOW_EMPTY_VALUE: "빈 값은 입력할 수 없습니다.",
  NOT_ALLOW_NAME_LENGTH: "자동차 이름은 5자를 초과해서 입력할 수 없습니다.",
  NOT_ALLOW_NAME_TYPE: "자동차 이름은 한/영문으로만 입력이 가능합니다.",
  NOT_ALLOW_COUNT: "0보다 큰 수를 입력해주세요.",
};

export const CONGRATULATORY_MESSAGE = "🎇🎇🎇축하합니다!🎇🎇🎇";

export const ACTION_TYPE = {
  CAR_NAME: "CAR_NAME",
  ATTEMPT_COUNT: "ATTEMPT_COUNT",
  RESET: "RESET",
};

export const MAX_CAR_NAME_LENGTH = 5;
export const MAX_NUMBER = 9;
export const MINIMUM_CONDITIONS_FOR_MOVEMENT = 4;
export const SHOW_WINNER_ALERT_RENDER_CAR_DELAY_MILLISECONDS = 2000;
export const RENDER_CAR_RENDER_CAR_DELAY_MILLISECONDS = 1000;

export const CAR_MODEL_INITIAL_STATE = {
  cars: [],
  winner: [],
  attemptCount: 0,
};
