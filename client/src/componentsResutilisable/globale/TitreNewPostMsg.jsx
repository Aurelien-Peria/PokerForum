import React from 'react'
import tabTitreNewPost from '../../tools/tab/TabTitreNewPost'
import tabTitreNewMsg from '../../tools/tab/TabTitreNexMsg'

export default function TitreNewPostMsg({children}) {

  return (
    <p className={`text-[11px] sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] sup480:pb-[13px] sup768:pb-[16px] sup1024:pb-[17px] sup1600:pb-[19px] text-vertFoncer pb-[10px] `}>
        {children}
    </p>
  )
}
