import React, {useState} from "react";
import Counter from "./counter";

const initialState = [
    {id:1, value:0 , name: "Ненужная вешь"},
    {id:2, value:0, name: "Ложка"},
    {id:3, value:0, name: "Вилка"},
    {id:4, value:0 , name: "Тарелка"},
    {id:5, value:0 , name: "Набор Минималиста"},
];

const CountersList=()=>{
    const [counters, setCounters] = useState(initialState);

    const handelDelete=(name)=>{
        const newCList = counters.filter(c=>c.name !== name);
        setCounters(newCList)
    };
    const handelReset=()=>{
        setCounters(initialState)
        console.log("handelReset");
    };

    return <>
        {counters.map((count)=>(
           <Counter key={count.id}
                    onDelete={handelDelete}
                    {...count}
           />
        ))}
        <button className="btn btn-primary btn-sm m-2" onClick={handelReset}>Reset</button>
    </>
};

export default CountersList;