import { myTattoStudioApi } from "@/api";
import { RegisterUserProps } from "@/interface";

class AuthService {
  
    static auth = (email: string, password:string) => {
        return myTattoStudioApi.post('/auth', {
            email, 
            password
        });
    }

    static validateUser = () => {
        return myTattoStudioApi.get('/auth/renew');
    }

    static registerUser = (user:RegisterUserProps) => {
        return myTattoStudioApi.post('/auth/register', user);
    }

}

export default AuthService;