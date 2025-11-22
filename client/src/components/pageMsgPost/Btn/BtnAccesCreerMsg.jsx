import React from 'react'
import TitreMessage from '../afficheMessage/TitreMessage';
import UseNbPageMsg from '../../../customHoocks/message/UseNbPageMsg';
import Paginate from '../../../componentsResutilisable/globale/Paginate';

export default function BtnAccesCreerMsg({message}) {
  const {currentPosts,currentPage,setcurrentPage,nbPage}=UseNbPageMsg(message);
  return (
    <>
      <div className='sup768:pb-[35px] pb-[20px] mx-auto my-0 w-[500px] flex items-center justify-between '>
        <button onClick={()=>{
        document.querySelector(".newMessage").scrollIntoView({ behavior: 'smooth'});
        }} 
        className={`sup480:text-[13px] sup768:text-[14px] sup768:px-[10px] sup768:py-[6px] sup1024:text-[13px] sup1600:text-[19px] sup1600:px-[12px] py-[5px] px-[8px] border-solid text-vertFoncer border border-vertFoncer rounded-lg text-[10px] transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer`}>
        Créer Message
        </button>
        <TitreMessage message={message} />
      </div>
      {nbPage<=0 ? "": <Paginate set={setcurrentPage} currentPage={currentPage} nbPage={nbPage}/> }
    </>
    
  )
}
