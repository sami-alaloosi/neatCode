/** @format */

import React from "react";
import store from "../../state-manegment/store";
import { useHistory } from "react-router-dom";
import { Button, Divider, Form, Grid, Segment} from "semantic-ui-react";
import axios from "axios";
import { useUserForm } from "../../hooks/useUserForm";
import { valueClearing } from "../../state-manegment/userReducer";



function UserLogin() {
  const [state, valueUpdate] = useUserForm();
  const login = state.login;
  const { push } = useHistory();

  const axiosLogin = () => {
    axios
      .post(`https://neatcode2.herokuapp.com/entry/login`, login)

      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", login.username);
        store.dispatch(valueClearing());
        push("/Questions");
      })
      .catch((err) => console.log("error", err));
  };

  const submit = (event) => {
    event.preventDefault();
    axiosLogin();
  };
  return (
    <div>
    <img src="/images/undraw1.png" alt="personal site" />
    <div className="user-login">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form onSubmit={submit}>
              <Form.Input
                placeholder="Username"
                icon="user"
                iconPosition="left"
                type="text"
                name="username"
                id="username"
                value={login.username}
                onChange={valueUpdate}
              />

              <Form.Input
                type="password"
                name="password"
                id="password"
                icon="lock"
                iconPosition="left"
                value={login.password}
                onChange={valueUpdate}
              />

              <Button content="Login" className="green" />
            </Form>
          </Grid.Column>
         
          <Grid.Column verticalAlign="middle">
            <Button
              className="blue"
              content="Sign up"
              icon="signup"
              size="big"
              onClick={() => push("/UserRegister")}
            />
          </Grid.Column>
        </Grid>
        <div className="virvertical-divider">
        <Divider vertical>Or</Divider>
        </div>
      </Segment>
    </div>
    <p className="red-text"> Note: if you dont want to create a new account you can use our premade guest account username: <b>guest1</b> , password: <b>guest123</b> </p>
    </div>
  );
}

export default UserLogin;
