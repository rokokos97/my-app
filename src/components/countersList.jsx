import React, {useState} from "react";
import Counter from "./counter";

const initialState =[
    {id:1, value:0 , name: "Ненужная вешь"},
    {id:2, value:0, name: "Ложка"},
    {id:3, value:0, name: "Вилка"},
    {id:4, value:0 , name: "Тарелка"},
    {id:5, value:0 , name: "Набор Минималиста"},
];

const CountersList=()=>{
    const [counters, setCounters] = useState(initialState);

    const handelDelete=(id)=>{
        const newCList = counters.filter(c=>c.id !== id);
        console.log(newCList);
        setCounters(newCList)
    };

    const handelIncrement =(id)=>{
        const incrementIndex = counters.findIndex(c=>c.id===id)
        const incrementCounters = [...counters]
        incrementCounters[incrementIndex].value+=1
        setCounters(incrementCounters)

    };

    const handelDecrement=(id)=>{
        const incrementIndex = counters.findIndex(c=>c.id===id)
        const incrementCounters = [...counters]
        incrementCounters[incrementIndex].value-=1
        setCounters(incrementCounters)
    };

    const handelReset=()=>{
        setCounters(initialState)
        console.log("handelReset");
    };

    return <>
        {counters.map((count)=>(
           <Counter key={count.id}
                    onDelete={handelDelete}
                    onIncrement={handelIncrement}
                    onDecrement={handelDecrement}
                    {...count}
           />
        ))}
        <button className="btn btn-primary btn-sm m-2" onClick={handelReset}>Reset</button>
    </>
};

export default CountersList;