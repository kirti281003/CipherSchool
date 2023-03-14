import axios from "axios";
import { ALL_POST_FAIL, ALL_POST_REQUEST, ALL_POST_SUCCESS, POST_FAIL, POST_REQUEST, POST_SUCCESS, REGISTER_POST_FAIL, REGISTER_POST_REQUEST, REGISTER_POST_SUCCESS } from "../constants/postConstant";

export const allPosts=()=>async(dispatch)=>{
    try{
        dispatch(
            {
                type:ALL_POST_REQUEST
            }
        )
        const {data}=await axios.get(`/api/v1/videos`);
        console.log(data);
        dispatch(
            {
                type:ALL_POST_SUCCESS,
                payload:data.videos
            }
        )

    }
    catch(error)
    {
        console.log(error);
        dispatch(
            {
                type:ALL_POST_FAIL,
                payload:error.response.data.err
            }
        )
        
    }
  }

  export const getPost=(id)=>async(dispatch)=>{
    try{
        dispatch(
            {
                type:POST_REQUEST
            }
        )
        const {data}=await axios.get(`/api/v1/video/${id}`);
        console.log(data);
        dispatch(
            {
                type:POST_SUCCESS,
                payload:data.video
            }
        )

    }
    catch(error)
    {
        console.log(error);
        dispatch(
            {
                type:POST_FAIL,
                payload:error.response.data.err
            }
        )
        
    }
  }

  export const registerPost=(title,desc,photo,video)=>async(dispatch)=>{

    try {
      dispatch({ type: REGISTER_POST_REQUEST });
  
      const config = { headers: { "Content-Type": " multipart/form-data " } };
  
      const { data } = await axios.post(
        `/api/v1/postVideo`,
        { title,desc,photo,video },
        config
      );
      console.log(data);
  
      dispatch({ type:REGISTER_POST_SUCCESS, payload: data.video });
    } catch (error) {
        console.log(error);
      dispatch({ type:REGISTER_POST_FAIL, payload:error.response.data.err});
    }

  }