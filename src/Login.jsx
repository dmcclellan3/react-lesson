import { useContext } from "react"
import { AuthContext } from "./authContext"

function Login() {
  const { auth } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className="p-5">
      <h1>Login</h1>
      <div>
        <div>Username:</div>
        <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        />
      </div>
      <h1>Login</h1>
      <div>
        <div>Password:</div>
        <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
        </div>

    </div>
   

   
  )
}


export default Login
