const ADD_POST = "ADD_POST";
const uptate_newPost = "uptate_newPost";

let initialstate = {
  postData: [
    { id: 1, messege: "How are you ?" },
    { id: 2, messege: "I am good " },
    { id: 3, messege: " NOT BAT " },
  ],

  newPostText: "HI BRO",
};

const ProfileReduce = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        messege: state.newPostText,
      };
      state.postData.push(newPost);
      state.newPostText = " ";
      return state;
    case uptate_newPost:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const uptatenewPosActionCreator = (text) => ({
  type: uptate_newPost,
  newText: text,
});

export default ProfileReduce;
