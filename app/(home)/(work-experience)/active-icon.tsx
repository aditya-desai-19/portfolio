export default function ActiveIcon() {
  return (
    <span className="relative flex items-center justify-center">
      <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-500 opacity-50" />
      <span className="relative inline-flex size-2 rounded-full bg-green-500" />
    </span>
  )
}
