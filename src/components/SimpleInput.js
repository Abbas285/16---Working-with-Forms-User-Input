import useInputValidate from "../Hook/useInputvalidate";
const SimpleInput = (props) => {
  const {
    value: enteredNames,
    isvalid: enteredNameIsValid,
    hasError: nameinputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameblurHandler,
    reset: resetNameInput,
  } = useInputValidate((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isvalid: enteredEmailIsValid,
    hasError: EmailinputHasError,
    valueChangeHandler: EmailChangeHandler,
    inputBlurHandler: EmailblurHandler,
    reset: resetEmailInput,
  } = useInputValidate((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredNames);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameinputHasError
    ? "form-control invalid"
    : "form-control";
  const EmailInputClasses = EmailinputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={nameChangeHandler}
          onBlur={nameblurHandler}
          value={enteredNames}
        />
        {nameinputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={EmailChangeHandler}
          onBlur={EmailblurHandler}
          value={enteredEmail}
        />
        {EmailinputHasError && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
