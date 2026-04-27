import { LoginAction, LoginState } from "@/types/auth/authtype"

const AuthReducer  =(state:LoginState,action:LoginAction):LoginState =>{

    switch(action.type){
        default :
        return state
    }

}

export default AuthReducer