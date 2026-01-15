"use client"

import { Button } from "@/components/ui/button"
import useScroll from "@/hooks/useScroll"
import { cn } from "@/lib/utils"
import { MoveUp } from "lucide-react"

export default function ScrollToTopBtn() {
  const { isScrolled } = useScroll()

  return (
    <Button
      variant={"default"}
      size={"icon"}
      className={cn(
        "fixed bottom-6 right-6 rounded-full h-12 w-12 z-50 transition-opacity cursor-pointer",
        isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <MoveUp />
    </Button>
  )
}
