import React from 'react'
import ContentPost from './ContentPost';
import CategoriePost from './CategoriePost';
import UseNbPagePost from '../../../customHoocks/forum/UseNbPagePost';
import Paginate from '../../../componentsResutilisable/globale/Paginate';

export default function AfficherAllPost() {
  
  const {currentPosts,currentPage,setcurrentPage,nbPage}=UseNbPagePost();

  return (
    <div className=" sup480:w-[450px] sup768:w-[700px] sup1024:w-[850px]  sup1600:w-[1000px]   w-full mt-0  mx-auto max-w-[1800px] ">
      {nbPage<=0? "" : <Paginate set={setcurrentPage} currentPage={currentPage} nbPage={nbPage} />}
      {currentPosts.map((element,index) => {
          return (
              <div key={element._id}>
                  <CategoriePost  index={index}/>
                  <ContentPost element={element}/>
              </div>
          );
        })}
        {nbPage<=0? "" : <Paginate set={setcurrentPage} currentPage={currentPage} nbPage={nbPage} />}
    </div>
  )
}

