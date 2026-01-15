export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="text-center">
        <p className="text-sm text-muted">
          {"Designed & Developed by "}
          <span className="font-semibold">{"Aditya"}</span>
          <br />
          &copy;
          {`${new Date().getFullYear()}. All rights reserved`}
        </p>
      </div>
    </footer>
  )
}
