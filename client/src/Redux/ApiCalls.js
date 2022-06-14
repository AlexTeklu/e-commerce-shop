import{ loginFailure, loginStart, loginSuccess } from './userSlice';
import { publicRequest } from './../requestMethod';


export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/login", user);
        console.log(res);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
        
    }

}