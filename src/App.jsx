import {useState, useRef} from "react"
import googleLogo from "./assets/google-logo.svg"
import "./App.scss"
import Email from "./Email.jsx"
import Password from "./Password.jsx"
import Error from "./Error.jsx"
import End from "./End.jsx"

function App() {
   const [page, setPage] = useState(<Email forgetPass={errorHappen} saveMail={setPassword} />)
   // const emailData, setEmail] = useState("")
   let emailData = null

   function setPassword(data) {
      // console.log(data)
      emailData = data
      setPage(<Password end={theEnd} error={errorHappen} email={emailData} />)
   }

   function returnMain() {
      setPage(<Email forgetPass={errorHappen} saveMail={setPassword} />)
   }

   function errorHappen() {
      setPage(<Error ret={returnMain} />)
   }
   function theEnd() {
      setPage(<End />)
   }

   return <div className="page">{page}</div>
}

export default App
