import React from "react";
import OurUser from "./OurUser";
import Master from "./Master";

import Graph from "./Graph";
import IdealMatch from "./IdealMatch";
import Text from "./Text";
import Ready from "./Ready";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div>
      <OurUser></OurUser>
      <Master></Master>
      <OurServices></OurServices>
      <Graph></Graph>
      <IdealMatch></IdealMatch>
      <Text></Text>
      <Ready></Ready>
    </div>
  );
};

export default Home;
