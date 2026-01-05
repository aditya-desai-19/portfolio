import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-end items-center gap-4">
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Separator
        orientation="vertical"
        className="
            data-[orientation=vertical]:h-6
            data-[orientation=vertical]:w-[2px]
            data-[orientation=vertical]:bg-foreground
            shrink-0
        "
      />
      <Button variant="outline" size="icon" >
        <Sun className="size-4"/>
      </Button>
    </nav>
  );
}
