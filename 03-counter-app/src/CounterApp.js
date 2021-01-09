import React,{useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value}) => {

    const [ counter, setCounter] = useState(value);

    //handleAdd
    const handleAdd = () =>{
        setCounter(counter + 1);
        // setCounter( (counter) => counter + 1 )
    };

    //handleReset
    const handleReset = () =>{
        setCounter(value);
    };
    //handleless
    const handleless = () =>{
        setCounter(counter - 1);
    };
    
    return (
    <>
        <h1>CounterApp</h1>
        <p> { counter } </p>
        {/* Funcion por referencia */}
        <button onClick={ handleAdd }>+1</button>  
        <button onClick = { handleReset }>Reset</button>
        <button onClick = { handleless }>-1</button>
    </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
};

export default CounterApp;
