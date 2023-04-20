import { useQuery ,useMutation, useQueryClient} from "react-query";
import { DeleteData, EditData, GetData, PostData } from "../service/Api";



export  const useGetTododata = (todo) => {
    return ( useQuery(["mySuperherokey",todo],GetData)
      
    )}
  

export const usePosttododata =()=>{
    const queryClient=useQueryClient()
    return useMutation(PostData,{onSuccess:()=>{queryClient.invalidateQueries("mySuperherokey")}})
}   


export const useDeletetododata =()=>{
    const queryClient=useQueryClient()
    return useMutation(DeleteData,{onSuccess:()=>{queryClient.invalidateQueries("mySuperherokey")}})
}   

export const useEditTodo =(id, todo)=>{
    console.log("usetodo", todo);
    const queryClient=useQueryClient(id)
    return useMutation(EditData,{onSuccess:()=>{queryClient.invalidateQueries("mySuperherokey")}})
}   
 