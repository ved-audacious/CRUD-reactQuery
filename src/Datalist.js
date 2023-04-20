import { useState } from "react";
//import {useDeletetododata,useAddtododata,useTododata} from "./Hooks/GetTododata";
import { usePosttododata, useGetTododata, useDeletetododata, useEditTodo } from "./Hooks/NewData"
import "./datalist.css"


function Datalist() {

  //get data from api
  const { data } = useGetTododata()
  //console.log(data)

  const [todo, setTodo] = useState("")
  //jo editfunction se id mila usko set krane k liy
  const [editId, setEditId] = useState("")
  //post data from input to api

  const { mutate } = usePosttododata()

  const { mutateAsync: forEditData } = useEditTodo();

  const { mutateAsync: deleteTheData } = useDeletetododata();

  const handleEdit = (id) => {
    setEditId(id)
    const findTodo = data.data.find((i) => i.id === id)
    setTodo(findTodo.todo)
  }
  console.log(todo)

  const addTodo = () => {
    try {
      if (editId) {
        const payload = { id: editId, todo: todo }
        forEditData(payload)
        setEditId("")
        setTodo("")
      }
      else if (todo.length >= 1) {
        const newtodo = { todo }
        console.log(newtodo)
        mutate(newtodo)
        setTodo("")
      }
    } catch (err) { console.log(err) }
  
  }



  return (

    <div className='todo-container'>
        <h1>My Todo List</h1>
          <div className='input-container'>
          <input
            placeholder='Add your todo '
            onChange={(e) => { setTodo(e.target.value) }}
            value={todo}
          />
        <button className="btn-add" onClick={addTodo}>Add Todo</button>
    </div>

    <div className='todo-listing'>
        {data?.data.length > 0 ? data?.data.map((ele, idx) => {
            return (
                <div   style={{ display: "flex", alignItems: "center" }} key={idx}>
                    <div className="listview">
                    <span className='todoname'>
                        {ele.id}
                    </span>
                    <span className='todoname'>
                        {ele.todo}
                    </span>
                    <span>
                        <button className="btn-editDele" onClick={() => handleEdit(ele.id)}>
                            Edit
                        </button>
                    </span>
                    <span>
                        <button className="btn-editDele"
                         onClick={() => {
                            deleteTheData(ele.id)
                        }}>
                            Delete
                        </button>
                    </span></div>
                </div>
            )
        }) : <div>No record found!!</div>}
    </div>
</div>
  );
}

export default Datalist;



