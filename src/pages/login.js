import { useRouter } from "next/router";
import { useState } from "react";
import { useLoginData } from "@/stores/loginData"

export default function Login(){
    const Router = useRouter();
    const [state, setState] = useState({
        username: '',
        password: '',
    });



    const LoginData = useLoginData();

    const handleOnChange = (e) => setState({
        ...state,[e.target.name]:  e.target.value
    });

    const handleSignInClicked = ()=>{


        if(state.username === " " || state.password === ""){
            alert("Username and Password is empty")
        } else if(state.username === state.password || state.password === state.username){
            Router.push('/loginDisplay');
            LoginData.setData({
                username: state.username,
                password: state.password,
                otherDetails: state.username,
            });
        } else {
            alert("Username and password are not match")     
        }
    }

    return(
        <div className="p-20">
            <div className="max-w-[200px] flex flex-col gap-4 border border-gray-400 p-4 rounded-md">
                <h1 className="uppercase font-bold">Login</h1>
            username <input 
                    className="input" 
                    name="username"
                    value={state.username}
                    onChange={handleOnChange}
                />
            password <input 
                    className="input" 
                    name="password"
                    type={"password"}
                    value={state.password}
                    onChange={handleOnChange}
                />
                  <button 
                    onClick={handleSignInClicked} 
                    className="button">
                    Sign In
                </button>

            </div>
        </div>
    )
}