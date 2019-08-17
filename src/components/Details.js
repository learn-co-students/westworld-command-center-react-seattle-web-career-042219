import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo";

//prettier-ignore
const Details = ({ hosts, areas, selectedHost, activateAHost, setArea, addLog }) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => {
    if (selectedHost) {
      return (
        <HostInfo
          hosts={hosts}
          areas={areas}
          selectedHost={selectedHost}
          activateAHost={activateAHost}
          setArea={setArea}
          addLog={addLog}
        />
      );
    } else {
      return <Image size="medium" src={Images.westworldLogo} />;
    }
  };

  return (
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  );
};

export default Details;
