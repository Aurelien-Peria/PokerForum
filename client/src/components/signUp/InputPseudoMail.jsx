import React from 'react'
import validePseudo from '../../fonction/nav/ValidePseudo';
import valideMail from '../../fonction/nav/ValideMail';
import { useContext } from 'react';
import SigneUpContext from '../../Context/SignUpContext';
import SigneUpInContext from '../../Context/SIgneUpInContext';

export default function InputPseudoMail() {
    const{valueInputSignUp,setvalueInputSignUp,errTypeSignUp, seterrTypeSignUp,errNbSignUp, seterrNbSignUp}=useContext(SigneUpContext);
    const{errMsgNav, seterrMsgNav}=useContext(SigneUpInContext);
  return (
    <>
        <div className="w-full flex items-start justify-evenly">
            <input
                className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc placeholder:opacity-[0.7]"
                placeholder="$pider95"
                type="text"
                onChange={(e)=>{
                setvalueInputSignUp({...valueInputSignUp,pseudonyme:e.target.value});
                validePseudo(e,errNbSignUp,seterrNbSignUp);
                }}
                onClick={()=>seterrMsgNav({
                  ...errMsgNav,signUp:"",
                })}
                id="Pseudonyme"
                value={valueInputSignUp.pseudonyme}
            />
            <input
                className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc placeholder:opacity-[0.7]"
                placeholder="texte@exemple.com"
                type="email"
                autoComplete='username'
                onChange={(e)=>{
                setvalueInputSignUp({...valueInputSignUp,email:e.target.value})
                valideMail(e,errTypeSignUp,seterrTypeSignUp,errNbSignUp,seterrNbSignUp);
                }}
                onClick={()=>seterrMsgNav({
                  ...errMsgNav,signUp:"",
                })}
                id="Mail"
                value={valueInputSignUp.email}
            />
        </div>
               
        
        <div className="sup480:text-[11px] sup768:text-[13px] sup1024:text-[15px] sup1600:text-[16px] text-[9px]  w-full flex items-start justify-evenly text-errorDeux">
            <div className='flex flex-col justify-start w-[40%]' >
                <p className="sup480:h-[17px] sup768:h-[19px] sup1024:h-[21px] sup1600:h-[23px] text-errorDeux h-[15px]" >{errNbSignUp.pseudo===true?"- 2 caractères minimum.":""}</p>
                <p className='sup480:h-[17px] sup768:h-[19px] sup1024:h-[21px] sup1600:h-[23px] h-[15px]'></p>
            </div>
            <div className='flex flex-col justify-start w-[40%]' >
                <p className="sup480:h-[17px] sup768:h-[19px] sup1024:h-[21px] sup1600:h-[23px] text-errorDeux h-[15px]" >{errTypeSignUp.mail===true?"- Doit être de type Mail.":""}</p>
                <p className="sup480:h-[17px] sup768:h-[19px] sup1024:h-[21px] sup1600:h-[23px] text-errorDeux h-[15px]" >{errNbSignUp.mail===true?"- 5 caractères minimum.":""}</p>
            </div>
        </div>
    </>
  )
}
