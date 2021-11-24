export const initialState = {
  nightMode: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return {
        state,
        nightMode: !state.nightMode,
      };
    default:
      return state;
  }
};

export default reducer;
