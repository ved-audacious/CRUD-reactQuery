//import axios from "axios";
//import { useQuery ,useMutation, useQueryClient} from "react-query";



// const addTodo=(todo)=>{
// return axios.post(`http://localhost:4010/tododatalist`,todo)
// }


// const fetchtododata = () => {
//     return axios.get(`http://localhost:4010/tododatalist`)
// }

// const deleteTodo=(id)=>{
//     axios.delete(`http://localhost:4010/tododatalist/${id}`)
// }

// const editTodo=(id)=>{
//     axios.put(`http://localhost:4010/tododatalist/${id}`)
// }   


// export  const useTododata = () => {
//     return ( useQuery("mySuperherokey",fetchtododata)
      
//     )}
  

// export const useAddtododata =()=>{
//     const queryClient=useQueryClient()
//     return useMutation(addTodo,{onSuccess:()=>{queryClient.invalidateQueries("mySuperherokey")}})
// }   


// export const useDeletetododata =()=>{
//     const queryClient=useQueryClient()
//     return useMutation(deleteTodo,{onSuccess:()=>{queryClient.invalidateQueries("mySuperherokey")}})
// }   

// export const useEdittododata =()=>{
//     const queryClient=useQueryClient()
//     return useMutation(editTodo,{onSuccess:()=>{queryClient.invalidateQueries("mySuperherokey"); navigate("/")}})
// }   
