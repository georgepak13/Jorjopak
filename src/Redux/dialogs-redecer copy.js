const uptat_newMessageBaby = "uptat_newMessageBaby";
const send_message = "send_message";

let initialstate = {
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
};
const DialogsReduce = (state = initialstate, action) => {
  switch (action.type) {
    case uptat_newMessageBaby:
      state.newMessageBaby = action.bady;
      return state;
    case send_message:
      let bady = state.newMessageBaby;
      state.newMessageBaby = "";
      state.messageData.push({ id: 6, messege: bady });
      return state;
    default:
      return state;
  }
};

export const SendMessageCreator = () => ({ type: send_message });
export const uptatenewMessageCreator = (bady) => ({
  type: uptat_newMessageBaby,
  bady: bady,
});

export default DialogsReduce;
