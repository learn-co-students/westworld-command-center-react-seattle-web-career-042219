import React from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

//prettier-ignore
const LogPanel = ({activateAllHosts, events, activatedAll, handleActivate, addLog}) => {
  const dummyLogs = () => {
    // This is just to show you how this should work. But where should the log data actually get stored?
    // And where should we be creating logs in the first place?
    // Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
    // Just remember to import it

    let logs = [];

    logs.unshift(Log.warn("This is an example of a warn log"));
    logs.unshift(Log.notify("This is an example of a notify log"));
    logs.unshift(Log.error("This is an example of an error log"));

    return logs;
  };

  const handleClick=()=>{
    console.log("handleClick fires")
    if(activatedAll){
      addLog(Log.notify(`Decommissioned all hosts.`))
    } else {
      addLog(Log.notify(`Activated all hosts.`))
    }
    handleActivate()
  }

  const color = activatedAll ? "green" : "red"
  const activationStatusText = activatedAll ? "DECOMMISSION ALL" : "ACTIVATE ALL" 

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {dummyLogs().map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>
      <Button
        fluid
        color={color}
        content={activationStatusText}
        onClick={handleClick}
      />
    </Segment>
  );
};

export default LogPanel;
