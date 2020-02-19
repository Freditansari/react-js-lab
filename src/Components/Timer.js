import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const Timer = props => {

    const [currentCount, setCount] = useState(10);
    const timer = () => setCount(currentCount -1);

    useEffect(()=>{
        if (currentCount <=0) {
            return;
        }

        const id = setInterval(timer, 1000);

        console.log(currentCount);

        // return () => clearInterval(id);
    }, [currentCount]);

    return (
        <div>
            {currentCount}
        </div>
    )
}

Timer.propTypes = {

}

export default Timer
