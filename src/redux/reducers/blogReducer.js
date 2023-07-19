import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    blogData:{}
 };
 export const blogReducer = (state = initialState, {type,payload}) => {
   console.log(type,payload)
    switch (type) {
        case(ActionTypes.BLOG_ACTION):
      return {...state,blogData:payload}
       default:
          return state;
    }
 }