const INITIAL_STATE = {
  login: [
    {
      email: null,
      nivel: null
    }
  ]
};

export default function login(state = INITIAL_STATE, action) {
  if (action.type === "INFO_LOGIN") {
    return { ...state, login: action.login };
  }

  return state;
}
