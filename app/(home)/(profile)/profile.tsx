import SocialButtonsBar from "./social-buttons-bar";
import ProfileImage from "./profile-image";

export default function Profile() {
  return (
    <div className="flex justify-between items-end">
      <ProfileImage />
      <SocialButtonsBar />
    </div>
  );
}
