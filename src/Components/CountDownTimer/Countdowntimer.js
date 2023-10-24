import { useState, useEffect } from 'react'
import './Countdowntimer.css'
import { getRemainingTimeUntilMsTimestamp } from './CountDownUtils'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
}


const Countdowntimer = ({CountdownTimestampMs}) => {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            UpdateRemainingTime(CountdownTimestampMs);
         }, 1000)
         return () => clearInterval(intervalId);
    }, [CountdownTimestampMs])


    function UpdateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className='countdown-timer'>
            <span className="fondo-color" >{remainingTime.days}</span>
            <span className="fondo-color" >D</span>
            <span className="fondo-color" >{remainingTime.hours}</span>
            <span className="fondo-color" >H</span>
            <span className="fondo-color" >{remainingTime.minutes}</span>
            <span className="fondo-color" >M</span>
            <span className="fondo-color" >{remainingTime.seconds}</span>
            <span className="fondo-color" >S</span>
        </div>
        
    )
}

export default Countdowntimer