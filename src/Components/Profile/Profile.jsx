import Myposts from "./Myposts/Myposts";
import MypostContener from "./Myposts/Myposts-contener";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MypostContener store={props.store}
        postData={props.ProfilePage.postData}
        newPostText={props.ProfilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};
export default Profile;
