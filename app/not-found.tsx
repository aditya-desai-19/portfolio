import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-9xl font-semibold">{"404"}</h2>
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-2xl font-medium">{"Page Not Found!"}</h3>
          <p className="text-muted">
            {
              "The page you're trying to access doesn't exist or has been removed."
            }
          </p>
          <Button asChild className="my-2">
            <Link href="/">{"Return Home"}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
