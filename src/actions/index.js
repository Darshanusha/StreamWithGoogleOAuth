import streams from "../apis/streams";
import history from "../Histoty";

export const signIn = (userId)=>{
    return{
        type: "SIGN_IN",
        payload: userId
    }
}

export const signOut = ()=>{
    return{
        type: "SIGN_OUT"
    }
}

export const createStream = (formValues) => async (dispatch,getState) =>{
    const userId = getState().auth.userId;
    const response = await streams.post('/streams', {...formValues,userId});
    dispatch({type: "CREATE_STREAM", payload: response.data});
    //programmatic navigation
    history.push("/stream/list");
}

export const featchStreams = () => async dispatch =>{
    const response = await streams.get('/streams');
    dispatch({type: "FEATCH_STREAMS", payload: response.data});
}

export const editStream = (id,formValues) => async dispatch =>{
    const response = await streams.put(`/streams/${id}`,formValues);
    dispatch({type: "EDIT_STREAM", payload:response.data});
    //programmatic navigation
    history.push("/stream/list");
}

export const deleteStream = (id) => async dispatch =>{
    await streams.delete(`/streams/${id}`);
    dispatch({type: "DELETE_STREAM", payload: id});
}

export const featchStream = (id) => async dispatch =>{
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: "FEATCH_STREAM", payload: response.data});
}