import {useState, useRef} from "react"
import googleLogo from "./assets/google-logo.svg"
import "./App.scss"

function Error({ret}) {
   function returnMain() {
      ret()
   }
   return (
      <div className="block">
         <div className="enter">
            <div className="enter__left">
               <img src={googleLogo} alt="google logo" className="enter__logo" />
               <h1 className="enter__title">Помилка</h1>
               <h4 className="enter__sub-title">На жаль сталася помилка, повіторіть ваш вхід</h4>
            </div>
            <div className="enter__right">
               <div className="enter__buttons">
                  <button onClick={returnMain} className="bg">
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

export default Error
