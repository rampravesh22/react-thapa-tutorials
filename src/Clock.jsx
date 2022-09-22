import React,{useState} from 'react';

const Clock = ()=>{
    const date = new Date();
    const [currentTime, setCurrentTime] = useState(date.toLocaleTimeString());
    const getTime = ()=>{
        console.log("hello");
        let x = new Date().toLocaleTimeString();
        setCurrentTime(x);
    }

    // const [currentTime, setCurrentTime] = useState(initialTime);
    return(
        <>
            <h1>{currentTime}</h1>
            <button onClick={getTime}>Get Time</button>

        </>
    )
}

export default Clock;