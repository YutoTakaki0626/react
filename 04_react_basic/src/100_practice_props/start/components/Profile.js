import "./Profile.css";

const Profile = ({name='John Doe', age=23, country='Japan'}) => {
  return (
    <div className="profile">
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{country}</h3>
    </div>
  );
};


export default Profile;
