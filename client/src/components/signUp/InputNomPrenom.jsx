import React from 'react'
import valideNom from '../../fonction/nav/ValideNom';
import validePrenom from '../../fonction/nav/ValidePrenom';
import { useContext } from 'react';
import SigneUpContext from '../../Context/SignUpContext';
import SigneUpInContext from '../../Context/SIgneUpInContext';

export default function InputNomPrenom() {
    const{valueInputSignUp,setvalueInputSignUp,errTypeSignUp, seterrTypeSignUp,errNbSignUp, seterrNbSignUp}=useContext(SigneUpContext);
    const{errMsgNav,seterrMsgNav}=useContext(SigneUpInContext);
  return (
    <>
        <div className="w-full flex items-start justify-evenly">
            <input
            className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc placeholder:opacity-[0.7]"
            placeholder="Peria"
            type="text"
            onChange={(e)=>{
                setvalueInputSignUp({...valueInputSignUp,nom:e.target.value});
                valideNom(e,errTypeSignUp,seterrTypeSignUp,errNbSignUp,seterrNbSignUp);
            }}
            onClick={(e)=>{
                seterrMsgNav({
                  ...errMsgNav,signUp:"",
                })
            }}
            id="Nom"
            value={valueInputSignUp.nom}
            />
            <input
            className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc placeholder:opacity-[0.7]"
            placeholder="Aurélien"
            type="text"
            onChange={(e)=>{
                setvalueInputSignUp({...valueInputSignUp,prenom:e.target.value})
                validePrenom(e,errTypeSignUp,seterrTypeSignUp,errNbSignUp,seterrNbSignUp);
            }}
            onClick={()=>seterrMsgNav({
                  ...errMsgNav,signUp:"",
                })}
            id="Prenom"
            value={valueInputSignUp.prenom}
            />
        </div>


        <div className={`sup480:text-[11px] sup768:text-[13px] sup1024:text-[15px] sup1600:text-[16px] text-[9px] w-full flex items-start justify-evenly  `}>
            <div className='flex flex-col justify-start w-[40%]'>
                <p className="sup480:h-[17px] sup768:h-[19px] sup1024:h-[21px] sup1600:h-[23px] text-errorDeux h-[15px]" >{errTypeSignUp.nom===true?"- Ne contient que des lettres.":""}</p>
                <p className='sup480:h-[17px] sup768:h-[19px] sup1024:h-[21px] sup1600:h-[23px] h-[15px]'></p>
            </div>
            <div className='flex flex-col justify-start w-[40%]' >
                <p className="sup480:h-[17px] sup768:h-[19px] sup1024:h-[21px] sup1600:h-[23px] text-errorDeux h-[15px]" >{errTypeSignUp.nom===true?"- Ne contient que des lettres.":""}</p>
                <p className='sup480:h-[17px] sup768:h-[19px] sup1024:h-[21px] sup1600:h-[23px] h-[15px]'></p>
            </div>
        </div>
    </>
  )
}
