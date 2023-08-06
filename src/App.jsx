import { useState } from 'react'
import { Child } from './Child'
import { ChildClass } from "./ChildClass";
function App() {
  const [show, setShow] = useState(true)
  const [classShow, setClassShow] = useState(true)

  const childComponent = show ? <Child/> : null
  const childClassComponent = classShow ? <ChildClass/> : null
  return (
    <div>
      <h1>Function Component</h1>
      <button onClick={()=>setShow(currentShow => !currentShow)}>Show/Hide</button><br/><br/>
      {childComponent}

      <h1>Class Component</h1>
      <button onClick={()=>setClassShow(currentShow => !currentShow)}>Show/Hide</button><br/><br/>
      {childClassComponent}
    </div>
  )
}

export default App
