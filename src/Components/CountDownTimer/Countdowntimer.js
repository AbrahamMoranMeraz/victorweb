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
            <span>{remainingTime.days}</span>
            <span>D</span>
            <span>{remainingTime.hours}</span>
            <span>H</span>
            <span>{remainingTime.minutes}</span>
            <span>M</span>
            <span>{remainingTime.seconds}</span>
            <span>S</span>
        </div>
        
    )
}

export default Countdowntimer