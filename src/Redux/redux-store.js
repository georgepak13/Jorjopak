import { combineReducers, createstore } from "redux";
import ProfileReduce from "./Profile-redecer";
import DialogsReduce from "./dialogs-redecer copy";

let reducers = combineReducers({
  ProfileReduce: ProfileReduce,
  DialogsReduce: DialogsReduce,
});
let store = createstore(reducers);

export default store;
