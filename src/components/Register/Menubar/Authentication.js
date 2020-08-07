import React, {useState} from 'react';
import {withRouter} from "react-router-dom";

function Authentication(props) {

  if ((props.email === "admin") &&  (props.password === "admin")) {

    return ('Success');
  } else {
    return ('Failed');
  }
}

export default Authentication;
