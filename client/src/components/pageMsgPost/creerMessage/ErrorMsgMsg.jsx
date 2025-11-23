import React from 'react'

export default function ErrorMsgMsg({paraMessageErreur,messageErreur}) {
  return (
    <p className="text-error text-xl  h-[35px] " ref={paraMessageErreur}>
        {" "}
        {messageErreur}{" "}
    </p>
  )
}
