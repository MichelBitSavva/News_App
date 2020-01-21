import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

const Footer = () => {
  return (
    <footer className="footer has-background-primary is-bold main-footer">
      <div className="content has-text-centered">
        <p>
          © 2019 DFL Deutsche Fußball Liga GmbH <br />
          Guiollettstraße 44-46
          <br />
          60325 Frankfurt am Main
        </p>
      </div>
    </footer>
  );
};

export default Footer;
