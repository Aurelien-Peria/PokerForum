import React from 'react'
import UseNbPageMsg from '../../../customHoocks/message/UseNbPageMsg';
import ContentMsg from './ContentMsg';
import Paginate from '../../../componentsResutilisable/globale/Paginate'
import CategorieMsg from './CategorieMsg';


export default function AfficheMessage({message,setMessage}) {
  const {currentPosts,currentPage,setcurrentPage,nbPage}=UseNbPageMsg(message);
  
    return(
      <div className="sup480:w-[400px]  sup768:mb-[35px] sup768:w-[630px] sup1024:w-[750px] sup1600:w-[850px] mb-[20px] w-[80%] my-0  mx-auto max-w-[1800px]">
        {currentPosts.map((element,index) => {
          return (
            <div key={element._id}>
                <CategorieMsg setMessage={setMessage} message={message} index={index} />
                <ContentMsg element={element}/>
            </div>
          );
        })}
        {nbPage<=0 ? "": <Paginate set={setcurrentPage} currentPage={currentPage} nbPage={nbPage}/> }
      </div>
    )

}