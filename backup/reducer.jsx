export function reducer(state, action) {
  switch (action.type) {
    case "add_number":
      return { ...state, number: action.value + " " };
    default:
      return state;
  }
}