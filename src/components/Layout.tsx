import React from "react";

import Header from "./sections/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className="bg-dark overflow-hidden">
        <Header />
        <div className="mx-auto min-h-screen px-8">{children}</div>
      </div>
    </>
  );
};

export default Layout;
