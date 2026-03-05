
import { useState } from 'react'
import './App.css'


function App() {
  const [todos,setTodos]=useState([ ])
  const [todo,setTodo]=useState('')
  return (
    <>
      <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input  value ={todo} onChange={(e)=>setTodo(e.target.value)}type="text" placeholder="🖊️ Add item..." />
        <i onClick={
          ()=>setTodos([...todos,{id: Date.now ,text:todo, status: false }])
        } className="fas fa-plus"></i>
      </div>
      <div className="todos">
       {
        todos.map(
          (value)=>{
            return(
              <div className="todo">
                <div className="left">  
                  <input onChange={(e)=>{
                    console.log(e.target.value)
                    setTodos(todos.filter(obj2=>{
                      if (obj2.id == value.id) {
                        obj2.status = e.target.value
                      }
                    }))
                  }} 
                  value={value.status} type="checkbox" name="" id="" />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"></i>
                </div>
              </div>

            )
          }
        )

         
       }
      </div>
    </div>
    </>
  )
}

export default App
