import React,{useState} from "react";


const Counter=()=>{
    const [count,setCount] = useState(0);
    const [users,setUsers] = useState(['User1','User2','User3']);

    const formatCount=()=>{
        return count===0? "empty" :count
    };

    const getBagesClasses=()=> {
        let classes = "badge m-2 ";
        classes += count === 0 ? "bg-warning" : "bg-primary";
        return classes
    };

    const handleIncriment = () =>{
        setCount((prevState)=>prevState+1);
    };

    const handleDicriment = () =>{
        setCount((prevState)=>prevState-1)

    };

    const handleTagChange=()=>{
        setUsers(['user4','user5','user6'])
    }

    return <>
        <ul>
            {
                users.map((user)=>{
                    return <li key={user} className="btn btn-primary btn-sm m-2" onClick={handleTagChange}>{user}</li>
                })
            }
        </ul>
        <span className={getBagesClasses()}>{formatCount()}</span>
        <button
            className="btn btn-primary btn-sm  m-2"
            onClick={handleIncriment}>
            +
        </button>
        <button
            className="btn btn-primary btn-sm m-2"
            onClick={handleDicriment}>
            -
        </button>
    </>
};

export default Counter;
