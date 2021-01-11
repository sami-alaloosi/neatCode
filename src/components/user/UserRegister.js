/** @format */
import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import axios from "axios";
import store from "../../state-manegment/store";
import { valueClearing } from "../../state-manegment/userReducer";
import { useUserForm } from "../../hooks/useUserForm";

function UserRegister() {
  const [state, valueUpdate] = useUserForm();
  const register = state.register;
  const { push } = useHistory();

  const registerObj = {
    username: register.usernameR,
    password: register.passwordR,
    email: register.email,
  };
  
  const axiosRegister = () => {
    axios
      .post(
        `https://neatcode-backend.herokuapp.com/entry/register`,
        registerObj
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", register.usernameR);
        store.dispatch(valueClearing());
        push("/Questions");
      })
      .catch((err) => console.log("error", err));
  };

  const submit = (event) => {
    event.preventDefault();
    axiosRegister();
  };

  return (
    <div className="marginR">
      <Segment placeholder>
        <Form onSubmit={submit}>
          <div className="register-div">Username</div>
          <Form.Input
            type="text"
            name="usernameR"
            id="usernameR"
            placeholder="Enter Your Username"
            value={register.usernameR}
            onChange={valueUpdate}
          />

          <div className="register-div">Email</div>
          <Form.Input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={register.email}
            onChange={valueUpdate}
          />

          <div className="register-div">Password</div>
          <Form.Input
            type="password"
            name="passwordR"
            id="passwordR"
            placeholder="Enter Your Password"
            value={register.passwordR}
            onChange={valueUpdate}
          />

          {/* <div className="register-div">Confirm Your Password</div>
          <Form.Input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confrim Your Password"
            value={register.confirmPassword}
            onChange={valueUpdate}
          /> */}

          <Button content="Submit" className="green" />
        </Form>
      </Segment>
      <div className="register-link">
        already have an account ?{" "}
        <Link to="/UserLogin">&nbsp; &nbsp;Login</Link>
      </div>
    </div>
  );
}

export default UserRegister;
