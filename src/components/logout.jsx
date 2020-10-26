import React from "react";
import { useHistory } from "react-router-dom";

import firebase from "firebase";

function Logout(props) {

  // function loginNav() {
  //   return ()
  // }
  firebase.auth().signOut();
  const his = useHistory();
  his.push('/login');
  return (
   <></>
  );
}

export default Logout;
