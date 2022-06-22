export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:null
};

export const reducer = (state, action) => {
  console.log(action);

  // Action is object of *Type* & *Payload*; Type, [Payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
