import React,{useState} from "react";


const Counter=(props)=>{
    const [value,setValue] = useState(props.value);
    const formatCount=()=>{
        return value===0? "empty" :value
    };

    const getBagesClasses=()=> {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes
    };

    const handleDicriment = () =>{
        setValue((prevState)=>prevState-1)
    };

    const handleIncriment = () =>{
        setValue((prevState)=>prevState+1);
    };

    return <div>
        <span>{props.name}</span>
        <span className={getBagesClasses()}>{formatCount()}</span>
        <button
            className="btn btn-primary btn-sm m-2"
            onClick={handleDicriment}>
            -
        </button>
        <button
            className="btn btn-primary btn-sm  m-2"
            onClick={handleIncriment}>
            +
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={()=>props.onDelete(props.id)}>Delete</button>
    </div>
};

export default Counter;
