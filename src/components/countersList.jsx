import React, {useState} from "react";
import Counter from "./counter";

const CountersList =()=>{
    const [counters,setCounters]=useState([
        {id:100, value:0, name:"Ненужная вещь",price:200},
        {id:101, value:4, name:"Ложка"},
        {id:102, value:0, name:"Вилка"},
        {id:103, value:0, name:"Тарелка"},
        {id:104, value:0, name:"Набор минималиста"},
    ]);

    const handleDelete =(id)=>{
        const newCounters=counters.filter((c) => c.id !== id)
        setCounters(newCounters);
    }
    return <>
        {counters.map((count)=>{
         return <Counter
             key={count.id}
             onDelete={handleDelete}
             {...count}
         />
    })}
    </>
};

export default CountersList;