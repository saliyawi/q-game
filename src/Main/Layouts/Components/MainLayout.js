import React from "react";
import Header from "../../Header/Components/Header";
import Footer from "../../Footer/Components/Footer";

const MainLayout = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
