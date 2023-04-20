import ApiCaller from "../utils/ApiCaller"
 

export const PostData= (todo) => {
    return ApiCaller("/","POST",todo,process.env.REACT_APP_TODO_API)
 }
 export const GetData=()=>{
    return ApiCaller(`/`,"GET",{},process.env.REACT_APP_TODO_API)
 }

 export const DeleteData=(id)=>{
    return ApiCaller(`/${id}`,"DELETE",{},process.env.REACT_APP_TODO_API)
 }

export const EditData=(payobj)=>{
   return ApiCaller(`/${payobj.id}`,"PUT",payobj,process.env.REACT_APP_TODO_API)
}