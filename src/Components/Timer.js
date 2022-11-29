import React, { useState, useEffect } from 'react' ;
import './Timer.css' ;

const Timer = ( )=>{
  const [totalTimeInseconds, setTotalTimeInseconds] = useState(216000 );
  const hours = Math.floor(totalTimeInseconds / 3600 );
  const minutes = Math.floor((totalTimeInseconds % 3600)/ 60);
  const seconds = totalTimeInseconds % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTimeInseconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);

  }, []);
  return(
    <div className={"TimerSec"}>
      <section className={"TimerSec"}>
        <p className={"TimerValues"}>{hours}
          <p className={"TimerDesc"}>Horas</p>
        </p>

        <p className={"TimerValues"}>
          <span>:</span>
          {minutes}
          <span>:</span>
          <p className={"TimerDesc"}>Minutos</p>
        </p>

        <p className={"TimerValues"}>{seconds}
          <p className={"TimerDesc"}>Segundos</p>
        </p>
      </section>
    </div>

  )

} ;export default Timer;