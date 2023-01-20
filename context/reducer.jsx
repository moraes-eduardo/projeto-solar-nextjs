export function reducer(state, action) {
  switch (action.type) {
    case "add_qtde":
      return { ...state, qtde: action.value + " " };
    case "add_potm":
      return { ...state, potm: action.value + " " };
    case "add_potc":
      return { ...state, potc: action.value + " " };
    default:
      return state;
  }
}