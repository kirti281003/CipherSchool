
import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants/userConstant";

export const userReducer=(state={},action)=>{
    switch(action.type){
        case LOGIN_USER_REQUEST:
            case REGISTER_REQUEST:
            return{
            isAuthenticated:false,
            user:{},
            loading:true
            };
            case LOGIN_USER_SUCCESS:
            case REGISTER_SUCCESS:
                return{
                    ...state,
                    isAuthenticated:true,
                    user:action.payload,
                    loading:false

                };
                case LOGIN_USER_FAIL:
                case REGISTER_FAIL:
                    return{
                    isAuthenticated:false,
                    user:{},
                    loading:false,
                    error:action.payload

                }
                default:return state
    }
}