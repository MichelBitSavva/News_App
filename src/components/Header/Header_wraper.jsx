import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Title from "./Title";

const HeaderWraper = () => {
  return (
    <div className="columns">
      <div className="column ">
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container headerContainer">
              <div>
                <figure className="image is-128x128">
                  <img
                    alt="bundesliga"
                    src="https://seeklogo.com/images/D/deutscher-fussball-bund-logo-C748057F81-seeklogo.com.png"
                  />
                </figure>
              </div>
              <Title />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeaderWraper;
