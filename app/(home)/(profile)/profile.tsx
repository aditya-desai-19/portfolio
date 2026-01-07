import SocialButtonsBar from "./social-buttons-bar";
import ProfileDetails from "./profile-details";

export default function Profile() {
  return (
    <div className="flex justify-between items-end">
      <ProfileDetails />
      <SocialButtonsBar />
    </div>
  );
}
