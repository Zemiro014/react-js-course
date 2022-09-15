import { useContext, useRef, useState } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from "react-router-dom";

const API_KEY = 'AIzaSyDOKTNOO8osPSR-InsjNtXCosib91iAmak';
const URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const { isLoading, setIsLoading } = useState(false)
  const history = useHistory()
  const { token } = useContext(AuthContext)

  const changePasswordHandler = (event) => {
    event.preventDefault();
    const enteredPassword = newPasswordInputRef.current.value;
    fetch(URL,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: token,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      history.replace('/')
    }).then(data => {
      console.log(data);
    }).catch(err => {
      alert(err.message)
    });
  }

  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='6' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
