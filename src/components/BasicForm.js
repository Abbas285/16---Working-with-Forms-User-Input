import useBasicInputHook from "../Hook/useBasicInputHook";
const BasicForm = (props) => {
  const {
    value: firstname,
    enteredvalidate: firstnamevalid,
    isinputfieldvalid: isfirstnamevalid,
    inputhandler: handleFirstnameHandler,
    inputhandleronBlur: handlefirsblur,
    reset: resetFirstname,
  } = useBasicInputHook((value) => value.trim() !== "");
  const {
    value: lastname,
    enteredvalidate: lastnamevalid,
    isinputfieldvalid: islastnamevalid,
    inputhandler: handleLirstnameHandler,
    inputhandleronBlur: handlelastbur,
    reset: resetLirstname,
  } = useBasicInputHook((value) => value.trim() !== "");
  const {
    value: emailaddress,
    enteredvalidate: emailvalid,
    isinputfieldvalid: isemailvalid,
    inputhandler: handleEmailHandler,
    inputhandleronBlur: handleemailblur,
    reset: resetEmail,
  } = useBasicInputHook((value) => value.includes("@"));

  const submithandler = (event) => {
    event.preventDefault();
    if (!firstnamevalid && !lastnamevalid && !emailvalid) {
      return;
    }
    console.log("ok");
    resetFirstname();
    resetLirstname();
    resetEmail();
  };

  let formisvalid = false;
  if (firstnamevalid && lastnamevalid && emailvalid) {
    formisvalid = true;
  }

  const firstnameclass = isfirstnamevalid
    ? "form-control invalid"
    : "form-control";

  const lastnameclasss = islastnamevalid
    ? "form-control invalid"
    : "form-control";
  const emailclass = isemailvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submithandler}>
      <div className="control-group">
        <div className={firstnameclass}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            value={firstname}
            onChange={handleFirstnameHandler}
            onBlur={handlefirsblur}
          />
          {isfirstnamevalid && (
            <p className="error-text">name must not empty.</p>
          )}
        </div>
        <div className={lastnameclasss}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            value={lastname}
            onChange={handleLirstnameHandler}
            onBlur={handlelastbur}
          />
          {islastnamevalid && (
            <p className="error-text">Last Name must not empty.</p>
          )}
        </div>
      </div>
      <div className={emailclass}>
        <label htmlFor="ename">E-Mail Address</label>
        <input
          type="email"
          id="ename"
          value={emailaddress}
          name="emailaddress"
          onChange={handleEmailHandler}
          onBlur={handleemailblur}
        />
        {isemailvalid && <p className="error-text">Email must not empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formisvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
