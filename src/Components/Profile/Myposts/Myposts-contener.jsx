import React from "react";

import {
  addPostActionCreator,
  uptatenewPosActionCreator,
} from "../../../Redux/Profile-redecer";
import My from "./Myposts";
import store from "../../../Redux/store";

const MypostContener = (props) => {
 ///Тут не работает
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let OnPostChancge = (text) => {
    let action = uptatenewPosActionCreator(text);
    props.store.dispatch({ action });
  };

  return <My uptate_newPost={OnPostChancge} addPost={addPost}  
  postData={props.postData} />;
};
export default MypostContener;
