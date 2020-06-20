import React from "react";
import Header from "../../Header/Components/Header";
import Footer from "../../Footer/Components/Footer";

const HomepageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
