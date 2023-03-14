import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants/userConstant";
import axios from "axios";
export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_USER_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
     
      const { data } = await axios.post(`/api/v1/signin`,
        { email, password },
        config
      );
      console.log(data);
  
      dispatch({ type:LOGIN_USER_SUCCESS, payload: data.user });
    } catch (error) {
        console.log(error);
      dispatch({ type: LOGIN_USER_FAIL, payload:error.response.data.err});
    }
  };
  export const register=(email,password,name)=>async(dispatch)=>{
    try {
      dispatch({ type:REGISTER_REQUEST});
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `/api/v1/signup`,
        { email, password,name },
        config
      );
      console.log(data);
  
      dispatch({ type:REGISTER_SUCCESS, payload: data.user });
    } catch (error) {
        console.log(error);
      dispatch({ type: REGISTER_FAIL, payload:error.response.data.error});
    }

  }