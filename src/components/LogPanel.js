import React from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

//prettier-ignore
const LogPanel = ({ logEvents, activatedAll, handleActivate, addLog}) => {
 
  const handleClick=()=>{
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
        {logEvents.map((log, i) => (
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
