import { useReducer } from "react";
const initialstate = {
  value: "",
  inputtoched: false,
};
const reducerfunction = (state, action) => {
  if (action.type === "inputhandle") {
    return {
      value: action.value,
      inputtoched: state.inputtoched,
    };
  }
  if (action.type === "inputblur") {
    return {
      value: state.value,
      inputtoched: action.blurvalue,
    };
  }
  if (action.type === "reset") {
    return {
      value: action.value,
      inputtoched: action.istouched,
    };
  }
  return initialstate;
};
const useBasicInputHook = (validateresult) => {
  //   const [enterdvalue, estentervalue] = useState("");
  //   const [enterdinputtuch, setenteredinputtouch] = useState(false);
  const [state, dispatch] = useReducer(reducerfunction, initialstate);

  const enteredvalidate = validateresult(state.value);
  const isinputfieldvalid = !enteredvalidate && state.inputtoched;

  const inputhandler = (event) => {
    // estentervalue(event.target.value);
    dispatch({ type: "inputhandle", value: event.target.value });
  };
  const inputhandleronBlur = () => {
    // setenteredinputtouch(true);
    dispatch({ type: "inputblur", blurvalue: true });
  };
  const reset = () => {
    dispatch({ type: "reset", istouched: false, value: "" });
    // estentervalue("");
    // setenteredinputtouch(false);
  };
  return {
    value: state.value,
    enteredvalidate,
    isinputfieldvalid,
    inputhandler,
    inputhandleronBlur,
    reset,
  };
};
export default useBasicInputHook;
