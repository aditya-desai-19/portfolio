import SocialButtonsBar from "./social-buttons-bar"
import ProfileDetails from "./profile-details"

export default function Profile() {
  return (
    <section className="flex flex-col justify-between items-center gap-2 p-2 md:flex-row md:items-end">
      <ProfileDetails />
      <SocialButtonsBar />
    </section>
  )
}
