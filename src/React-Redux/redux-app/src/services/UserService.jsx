import httpanything from "./../http-common.jsx";

const getAll = () =>{
    return httpanything.get("http://localhost/api/allusers")
}


const UserService = {
    getAll
}
export default UserService;