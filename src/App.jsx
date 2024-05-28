import { useContext } from "react"
import { fetchUser } from "./api"
import { AuthContext } from "./authContext"



function App() {

  const { auth } = useContext(AuthContext)

  const submit = () => {
    fetchUser({ auth })
  }

  return (
    <div className="p-5">
      <h1>Home</h1>
      <button onClick={() => submit()}>Fetch Profile</button>
    </div>
  )
}


export default App
