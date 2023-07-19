import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import {
  SendMessageCreator,
  uptatenewMessageCreator,
} from "../../Redux/dialogs-redecer copy";

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};
const Messages = (props) => {
  return <div className={s.dialog}>{props.messege}</div>;
};

const Dialogs = (props) => {
  let state = props.store.getstate().DialogsPage;
  let dialogElements = state.DialogData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let dialogElements1 = state.messageData.map((m) => (
    <Messages messege={m.messege} id={m.id} />
  ));
  let newMessageBaby = state.newMessageBaby;

  let OnSendMesasgeClick = () => {
    props.store.dispatch(SendMessageCreator());
  };

  let OnChangeClick = (e) => {
    let bady = e.target.value;
    props.store.dispatch(uptatenewMessageCreator(bady));
  };

  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>

        <div className={s.messages}>
          {dialogElements1}

          <div>
            <div>
              <textarea
                value={newMessageBaby}
                onChange={OnChangeClick}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button onClick={OnSendMesasgeClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;
