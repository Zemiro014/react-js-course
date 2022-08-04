import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    // Usando useRef
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // Usando useState
    // const [enteredUsername, setEnteredUsename] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsename(event.target.value);
    // }

    // const egeChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>


                    {/* Usando useState
                    <input
                        id="username"
                        type="text"
                        onChange={usernameChangeHandler}
                        value={enteredUsername} /> */}

                    {/* Usando Ref */}
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    {/* Usando useState
                     <input
                        id="age"
                        type="number"
                        onChange={egeChangeHandler}
                        value={enteredAge} /> */}

                    {/* Usando Ref */}
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit"> Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
};

export default AddUser;