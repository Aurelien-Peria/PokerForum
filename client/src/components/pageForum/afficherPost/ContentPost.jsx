import React from 'react'
import { useNavigate } from 'react-router-dom';
import TopContentPost from './TopContentPost';
import BottomContentPost from './BottomContentPost';

export default function ContentPost({element}) {

   const navigate = useNavigate();
    const accesPageMessagePost = (idPost) => {
        navigate(`/messagePost/${idPost}`);
    };
  return (
    <div  onClick={() => accesPageMessagePost(element._id)} className="sup480:h-[120px] sup768:h-[140px] sup1024:h-[160px] sup1600:h-[180px] h-[110px] flex-col border-solid border  border-gris bg-blanc text-xl hover:cursor-pointer mb-[30px] ">
        <TopContentPost element={element} />
        <BottomContentPost element={element} />
    </div>
  )
}
