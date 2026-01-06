"use client";

import { Separator } from "@/components/ui/separator";
import Navbar from "./navbar";
import Profile from "./(profile)/profile";
import ProfileDescription from "./(profile)/profile-description";

export default function Home() {
  return (
    <div className="w-1/2  p-4">
      <Navbar />
      <Separator className="my-4 h-0.5!"/>
      <Profile />
      <Separator className="my-4 h-0.5!"/>
      <ProfileDescription />
      <Separator className="my-4 h-0.5!"/>
    </div>
  );
}
