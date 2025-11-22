import React from 'react'
import TopContentMsg from './TopContentMsg'
import BottomContentMsg from './BottomContentMsg'

export default function ContentMsg({element}) {
  return (
     <div className="sup480:h-[120px]  sup768:h-[140px] sup768:mb-[35px] sup1024:h-[160px] sup1600:h-[180px] h-[110px] flex-col border-solid border  border-gris bg-blanc text-xl  mb-[20px] w-[full] ">
        <TopContentMsg element={element}/>
        <BottomContentMsg element={element} />
    </div>
  )
}
