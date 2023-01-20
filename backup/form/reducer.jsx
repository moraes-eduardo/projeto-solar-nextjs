import { useImmerReducer } from "use-immer";

const [state, dispatch] = useImmerReducer(FormReducer, DEFAULT_STATE);

function FormReducer(state, { key, payload }) {
  switch (key) {
    case "name":
      state.name.value = payload.newValue;
      state.name.error = payload.error;
      return;
    case "age":
      state.age.value = payload.newValue;
      state.age.error = payload.error;
      return;
    case "address":
      state.address.value = payload.newValue;
      state.address.error = payload.error;
      return;
    case "mobile":
      state.mobile.value = payload.newValue;
      state.mobile.error = payload.error;
      return;
    case "email":
      state.email.value = payload.newValue;
      state.email.error = payload.error;
      return;
    case "emailUpdates":
      state.emailUpdates.value = payload.newValue;
      state.emailUpdates.error = payload.error;
      return;
    default:
      return "throw new Error"(`No reducer available for key = ${key}`);
  }
}  