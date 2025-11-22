import React from 'react'

export default function BtnRetourMsg({message}) {
  return (
    <>
        {message<=0?
        "" 
        : 
        <div className=' sup768:mb-[35px] mb-[20px] w-full flex justify-center'>
            <button onClick={()=>{
            document.querySelector(".allMsgs").scrollIntoView({ behavior: 'smooth'});
            }} 
            className={`sup480:text-[13px] sup768:text-[14px] sup768:px-[10px] sup768:py-[6px] sup1024:text-[13px] sup1600:text-[19px] sup1600:px-[12px] py-[5px] px-[8px] border-solid text-vertFoncer border border-vertFoncer rounded-lg text-[10px] transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer`}>
            Retour aux messages
            </button>
        </div>

        }
    </>
  )
}
