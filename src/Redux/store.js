import ProfileReduce from "./Profile-redecer";
import DialogsReduce from "./dialogs-redecer copy";

let store = {
  
  _state: {
    ProfilePage: {
      postData: [
        { id: 1, messege: "How are you ?" },
        { id: 2, messege: "I am good " },
        { id: 3, messege: " NOT BAT " },
      ],

      newPostText: "HI BRO",
    },

    DialogsPage: {
      messageData: [
        { id: 1, messege: "How you like that?" },
        { id: 2, messege: "Hiw are you?" },
        { id: 3, messege: "OK" },
        { id: 4, messege: "Do you have many friends?" },
        { id: 5, messege: "When and where do you make friends?" },
      ],

      DialogData: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Dimich" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" },
      ],
      newMessageBaby: "",
    },
  },

  _Callsubcriber() {
    console.log("state chached");
  },
  getstate() {
    return this._state;
  },

  subcribe(observer) {
    this._Callsubcriber(observer);
  },

  dispatch(action) {
    this._state.ProfilePage = ProfileReduce(this._state.ProfilePage, action);
    this._state.DialogsPage = DialogsReduce(this._state.DialogsPage, action);

    this._Callsubcriber(this._state);
  },
};

window.store = store;

export default store;
