// import { useMutation, useQuery, useQueryClient } from "react-query";
// import { useNavigate, useParams } from "react-router-dom";
// import { useEditTodo , useTododata } from "./Hooks/NewData"
// //import { EditData } from "./service/Api";
// import { useState } from "react";



// const EditPost = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   console.log(id)
//   const { data } = useTododata()
//   console.log(data.data)

//   const[newdataTo,setnewdataTo]=useState(data.data)
//   console.log(newdataTo)
//   // const updatePostMutation = useMutation({
//   //   EditData, onSuccess: () => { queryClient.invalidateQueries("mySuperherokey");

//   //   }
//   // })
  
  

  
  
  
//   const { mutateAsync: handleEdit } = useEditTodo()


//   const handleSubmit = async (id) => {
//     try {
//       const data = await handleEdit(id)
//       console.log(data)
//     } catch (err) { }
//   }


//   return (
//     <div>
//       <h1>My ToDoList</h1>
//       <div>
//         <input  onChange={() => handleSubmit(id)} />
//         <button> Update</button>


//       </div>

//     </div>
//   )
// }
// export default EditPost

