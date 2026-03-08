import React from "react";
import OurUser from "./OurUser";
import Master from "./Master";

import Graph from "./Graph";
import IdealMatch from "./IdealMatch";
import Text from "./Text";
import Ready from "./Ready";
import OurServices from "./OurServices";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurUser></OurUser>
      <Master></Master>
      <OurServices></OurServices>
      <Graph></Graph>
      <IdealMatch></IdealMatch>
      <Text></Text>
    </div>
  );
};

export default Home;
