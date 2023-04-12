import {useState, useEffect} from "react";

const useCounter = (forwards = true, increment = 1) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (forwards) {
            setCounter((prevCounter) => prevCounter + increment);
        } else {
            setCounter((prevCounter) => prevCounter - increment);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards, increment]);

    return counter;
}

export default useCounter;