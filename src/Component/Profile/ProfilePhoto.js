import picture from './images/pp.jpg';
function ProfilePhoto () {
    return(
        <div  className="profilePhoto">
            <img src={picture} alt="profile photo"/>
        </div>
    );
}
export default ProfilePhoto;