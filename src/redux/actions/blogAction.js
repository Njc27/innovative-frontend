import { blogService } from "../../services/blogService";
import { ActionTypes } from "../constants/actionTypes";


export const getBlogData = () =>{

    return async dispatch =>{
        let respnd = await blogService();
    if(respnd.status === 200){
        dispatch({
            type:ActionTypes.BLOG_ACTION,
            payload:respnd?.data?.data
        })
    }
    else{
        dispatch({
            type:ActionTypes.BLOG_ACTION,
            payload:null
        })
    }
    }
}