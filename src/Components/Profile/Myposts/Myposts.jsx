import React from "react";
import s from "./Myposts.module.css";
import Post from "./post/Post";
import {
  addPostActionCreator,
  uptatenewPosActionCreator,
} from "../../../Redux/Profile-redecer";

const My = (props) => {
  debugger
  let postElement = props.postData.map((p) => (
    <Post messege={p.messege} id={p.id} />
  ));

  let newpostEl = React.createRef();

  let OnaddPost = () => {
    props.addPost();
  };
///Тут не работает
  let OnPostChancge = () => {
    let text = newpostEl.current.value;
    props.uptate_newPost(text);
  };

  return (
    <div className={s.ps}>
      <h1> My post</h1>
      <div>
        <div>
          <textarea
            OnChange={OnPostChancge}
            ref={newpostEl}
            value={props.newPostText}
          />
        </div>

        <div>
          <button onClick={OnaddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};
export default My;
