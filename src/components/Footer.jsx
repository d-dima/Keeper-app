import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year}, d_dima. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
