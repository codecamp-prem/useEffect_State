import { useEffect, useState } from "react";

export function Child(){
    const [age, setAge] = useState(0)
    const [name, setName] = useState("")
    
    useEffect(()=>{
        // When this component render and re-render
        console.log("Render")
    })

    useEffect(()=>{
        // When this component Mounts
        console.log("Hi")
        return () => {
            // When this component UnMounts
            console.log("Bye")
        }
    },[])

    useEffect(()=>{
        // When this name or age is changed
        console.log(`My name is ${name} and I am ${age} years old`)
    },[age, name])

    useEffect(()=>{
        // When this name changed, so does the document title
        document.title = name
        const timeout = setTimeout(() => {
            console.log(`My name is ${name}`)
        }, 1000)
        
        return () => {
            clearTimeout(timeout)
        }
    },[name])
    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br/><br/>
            <button onClick={()=>setAge(currentAge => currentAge-1)}>-</button>
            {age}
            <button onClick={()=>setAge(currentAge=>currentAge+1)}>+</button>
            <br/><br/>
            My name is {name} and I am {age} years old
        </div>
    )
}