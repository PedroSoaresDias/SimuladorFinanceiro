import React from "react";
import "../src/app/css/footer.css"

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} - FinSimulator
      </p>
    </footer>
  );
}
