import { ALL_POST_FAIL, ALL_POST_REQUEST, ALL_POST_SUCCESS, POST_FAIL, POST_REQUEST, POST_SUCCESS, REGISTER_POST_FAIL, REGISTER_POST_REQUEST, REGISTER_POST_SUCCESS } from "../constants/postConstant";

export const postReducer=(state=[],action)=>{
    console.log(action.type);
    switch(action.type)
    {
      
        case ALL_POST_REQUEST:
            return{
                loading:true,
                videos:[]
            };
        case ALL_POST_SUCCESS:
            return{
                ...state,
                loading:false,
                videos:action.payload
            };
        case ALL_POST_FAIL:
            return{
                loading:false,
                error:action.payload,
                videos:[]
            };
            default:return state;

    }
}

export const getpostReducer=(state={},action)=>{
    console.log(action.type);
    switch(action.type)
    {
      
        case POST_REQUEST:
        case REGISTER_POST_REQUEST:
            return{
                loading:true,
                video:{}
            };
        case POST_SUCCESS:
        case REGISTER_POST_SUCCESS:
            return{
                ...state,
                loading:false,
                video:action.payload
            };
        case POST_FAIL:
        case REGISTER_POST_FAIL:
            return{
                loading:false,
                error:action.payload,
                video:{}
            };
            default:return state;

    }
}