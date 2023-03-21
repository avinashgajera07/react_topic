import UserService from "./../services/UserService.jsx"

export const retierveUsers = () => async(dispatch)=>{
    console.log("retierveUsers inside action");
    try {
        const ResData = await UserService.getAll();
        return dispatch({type:"RETRIVE_ALL_USERS",payload:ResData})
    } catch (error) {
        console.log(error);
    }
}