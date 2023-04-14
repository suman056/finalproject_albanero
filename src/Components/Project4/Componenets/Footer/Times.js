import React, { useEffect, useState } from "react";
import '../style_formtime.scss'

function Times() {
  const [time, setTime] = useState([]);

  let [block, setBlock] = useState([]);
  useEffect(() => {
    let date = new Date();
    let minuteValue = date.getMinutes();
    let secondValue = date.getSeconds();
    if (time[1] != secondValue) {
      setBlock((previous) => [...previous, [minuteValue, secondValue]]);
    }
    console.log(block);
    setTime([[minuteValue], [secondValue]]);
  },[new Date()]);

  return (
    <main className="main1">
      <div className="div_time">
        <span>
          {block.map((value) => (
            <h1>
              {value[0]}:{value[1]}
            </h1>
          ))}
        </span>
      </div>
      <div className="div_time1">
        <h2>
          Time:-{time[0]}:{time[1]}
        </h2>
      </div>
    </main>
  );
}

export default Times;
