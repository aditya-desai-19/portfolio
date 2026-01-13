import { Button } from "@/components/ui/button"
import { Copy, Mail } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

const emailId = "officialdesaiaditya@gmail.com"

export default function GetInTouch() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailId)
      toast.success("Email copied!")
    } catch {
      toast.error("Failed to copy")
    }
  }

  return (
    <section className="p-2 h-52 flex justify-center items-center border-2 bg-accent">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm sm:text-lg font-medium italic">
          {"If you've scrolled this far, let's get in touch."}
        </h3>
        <div className="flex gap-2 items-center">
          <Button variant={"outline"} asChild>
            <Link href={`mailto:${emailId}`}>
              <Mail />
              <span>{"Email me"}</span>
            </Link>
          </Button>
          <span className="text-sm">or</span>
          <Button
            variant={"outline"}
            onClick={copyEmail}
            className="cursor-pointer"
          >
            <Copy />
            <span>{"Copy email id"}</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
