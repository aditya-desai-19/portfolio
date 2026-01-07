import SocialButtonsBar from "./social-buttons-bar";
import ProfileDetails from "./profile-details";

export default function Profile() {
  return (
    <section className="flex justify-between items-end p-2">
      <ProfileDetails />
      <SocialButtonsBar />
    </section>
  );
}
