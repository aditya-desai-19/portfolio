export default function Footer() {
  return (
    <footer>
      <div className="text-center">
        <p className="text-sm text-muted">
          {"Designed & Developed by "}
          <b>{"Aditya"}</b>
          <br />
          &copy;
          {`${new Date().getFullYear()}. All rights reserved`}
        </p>
      </div>
    </footer>
  )
}
