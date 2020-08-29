import Head from "../components/head";
import React from "react";
import Helmet from "react-helmet";
import Variables from "../utils/variables";
export default ({ children }, props) => (
  <div>
    <Head />
    <Helmet>
      <meta charset="utf-8" />
    </Helmet>
    <div className="root" data-is-touch="false">
      {children}
    </div>
  </div>
);
