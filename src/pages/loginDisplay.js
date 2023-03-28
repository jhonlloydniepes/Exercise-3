import { useLoginData } from "@/stores/loginData"

export default function LoginDisplay(){
    const { data } = useLoginData();

    return (
        <div className="p-20" >
        username: {data.username}
        <br/>
        password: {data.password}
        <br/>
        others: {data.otherDetails}
      
    </div>
    )
}