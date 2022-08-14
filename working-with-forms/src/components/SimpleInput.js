import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enterName, setEnterName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const nameInputChangeHandler = event => {
    setEnterName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enterName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }
    console.log(enterName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  }
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
