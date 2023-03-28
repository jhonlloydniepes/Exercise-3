import { useLoginData } from "@/stores/loginData"
import Login from "./login";

export default function Home() {
 const { data } = useLoginData();
 
  return (
    <Login/>
  )
}