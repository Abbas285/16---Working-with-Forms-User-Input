import { useState } from "react";

const useInputValidate = (validateValue) => {
  const [entererValue, setEnterValue] = useState("");
  const [istouched, setIsTouched] = useState(false);
  console.log("finction", validateValue(entererValue));
  const valueIsValid = validateValue(entererValue);
  const hasError = !valueIsValid && istouched;

  const valueChangeHandler = (event) => {
    setEnterValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnterValue("");
    setIsTouched(false);
  };

  return {
    value: entererValue,
    isvalid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInputValidate;
