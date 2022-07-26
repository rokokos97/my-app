import React from "react";

const Counter=(props)=>{
    console.log(props);
    // const [value,setValue]=useState(props.value)
    const {value}=props

    const formatValue =()=>{
        return value === 0 ? "empty" : value
    };
    const getBadgeClasses =()=>{
        let  classes ="bg m-2 btn-sm ";
        classes += value===0 ? "bg-warning" : "bg-primary"
        return classes
    };

    const handelIncrement =()=>{
        // setValue(value+1)
        console.log("handelIncrement");
    };

    const handelDecrement=()=>{
        // setValue(value-1)
        console.log("handelDecrement");
    };

return <div>
        <span>{props.name}</span>
        <span
            className= {getBadgeClasses()}>{formatValue()}
        </span>
        <button
            className="btn bg-primary btn-sm m-2"
            onClick={handelIncrement}
        >
            +
        </button>
        <button
            className="btn bg-primary btn-sm m-2"
            onClick={handelDecrement}
        >
            -
        </button>
        <button
            className="btn btn-danger"
            onClick={()=>props.onDelete(props.name)}
        >
            Delete
        </button>
    </div>
};

export default Counter;