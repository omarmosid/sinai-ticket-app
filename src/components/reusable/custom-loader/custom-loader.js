import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const CustomLoader = () => {
  return (
    <Dimmer active>
      <Loader />
    </Dimmer>
  );
};

export default CustomLoader;
