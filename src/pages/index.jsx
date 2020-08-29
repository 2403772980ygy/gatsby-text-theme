import React from "react";
import Sitedata from "../../data/site-data.yml";
import Base from "../layouts/base";
export default function Home() {
  return (
    <Base>
      <h1>{Sitedata.title}</h1>
    </Base>
  );
}
