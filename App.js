import { useState } from "react";

export default function App() {
  const [state, setState] = useState(0);
  const [per, setPer] = useState(0);

  var timesRun = 0;
  let percentage

  function handleClick() {
    var interval = setInterval(function () {
      timesRun += 1;
      percentage=(timesRun/50)*100
      setPer(percentage);
      setState(timesRun);
      if (timesRun === 50) {
        clearInterval(interval);
      }
      //do whatever here..
    }, 1000);
  }

  return (
    <div className="App">
      <div class="card" style={{ width: "100px" }}>
        <div class="card-body"></div>

        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: `${per}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        {state}
        <button onClick={handleClick}>ok</button>
      </div>
    </div>
  );
}
