import React from "react";
import openSocket from 'socket.io-client';
import { useHistory } from "react-router-dom";
import { withGlobalState } from 'react-globally'
import fakeAuth from '../utils/authContext'
import "./logout-btn.css"
const socket = openSocket('https://penny-pinchers-v2.herokuapp.com/');
// const socket = openSocket('localhost:7001');

function AuthButton(props) {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      {/* Welcome!{" "} */}
      <a className=" list-group-item list-group-item-action logout-btn"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
          socket.emit('logout', props.globalState.user.username)
        }}
      >
      <div class="d-flex w-100 justify-content-start align-items-center">
          <span class="fa fa-sign-out fa-fw mr-3"></span>
          <span class="menu-collapsed">Log out</span>
      </div>
      </a>
    </p>
  ) : (
    undefined
  );
}

export default withGlobalState(AuthButton)