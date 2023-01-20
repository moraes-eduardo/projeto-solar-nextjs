import React from "react";
import { useImmerReducer } from "use-immer";
import AddressDetails from "./AddressDetails";
import ContactDetails from "./ContactDetails";
import PersonalDetails from "./PersonalDetails";
import SubmitForm from "./SubmitForm";
import { FormProvider } from "./FormContext";
import { DEFAULT_STATE, FormReducer } from "./state";
import { validateForm, validateInput } from "./validation";

const Form = ({}) => {
  const [state, dispatch] = useImmerReducer(FormReducer, DEFAULT_STATE);

  const handleChange = (name, newValue) => {
      const error = validateInput(name, newValue);
      dispatch({
        key: name,
        payload: { newValue, error }
      });
  }

  const submitForm = () => { 
    e.preventDefault();
    if (validateForm(state, dispatch)) {
      console.log("== form is valid ==");
      // Call API
    }
  }

  return (
    <form onSubmit={submitForm}>
      <FormProvider value={{ state, handleChange }}>
        <PersonalDetails />
        <AddressDetails />
        <ContactDetails />
        <SubmitForm />
      </FormProvider>
    </form>
  );
};

export default Form;