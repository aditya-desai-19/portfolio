import Image from "next/image"
import profileImage from "../../../public/profile-image.jpg"

export default function ProfileDetails() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-end ">
      <Image
        src={profileImage}
        alt="profile-image"
        className="h-52 w-52 rounded-full"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-medium">{"Aditya Desai"}</h1>
        <p className="text-sm text-muted text-center md:text-left">
          {"Full Stack Developer"}
        </p>
      </div>
    </div>
  )
}
