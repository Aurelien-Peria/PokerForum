import React from 'react'
import TitreNewPostMsg from '../../../componentsResutilisable/globale/TitreNewPostMsg'
import OnclickTextArea from '../../../fonction/message/OnclickTextArea'

export default function CreerTitreMsg({setmessageErreur,valueMsgForm,setvalueMsgForm}) {
  return (
    <>
        <TitreNewPostMsg> Nouveau message : </TitreNewPostMsg>
        <div className="pt-1  px-0">
          <textarea
              placeholder='Écris ton message ici ...'
              id='areaCreerMessage'
              className="VisibleContenu sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] w-full outline-vertFoncer border-solid border border-vertFoncer text-vertFoncer py-[12px] px-[8px] resize-none text-[11px] "
              onClick={()=>OnclickTextArea(setmessageErreur)} value={valueMsgForm} 
              onChange={(e) => setvalueMsgForm(e.target.value)} rows={2}
          ></textarea>
        </div>
    </>
  )
}
