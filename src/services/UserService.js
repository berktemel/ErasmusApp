import backend from "./backend";

class UserService {
    async login(user) {
        return await backend.post('/auth_login',user)
    }
    async signupStudent(user) {
        console.log(user);
        return await backend.post('/user_create', user)
    }
    
}

export default new UserService();