import React from 'react'
import ReactPaginate from 'react-paginate';
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs';

export default function Paginate({set,nbPage,currentPage}) {

     const handlePageClick = ({selected})=>{
        set(selected+1);
    }

  return (
    <div className='sup480:text-[17px] sup768:text-[19px] sup1024:text-[22px] text-vertFoncer text-[15px] mb-[30px]'>
        <ReactPaginate
        breakLabel={
            <span className='mr-[16px]' >...</span>
        }
        nextLabel={
            <span className='sup480:h-[26px] sup768:h-[34px] h-[24px] flex items-center justify-center '>
            <BsChevronRight className='w-[15px]' />
            </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={nbPage}
        forcePage={currentPage-1}
        previousLabel={
            <span className='sup480:h-[26px] sup768:h-[34px] h-[24px] flex items-center justify-center '>
            <BsChevronLeft className='w-[15px]'/>
            </span>
        }
        containerClassName='w-full flex item-center justify-center flex-wrap '
        pageLinkClassName='text-[17px] px-[6px] flex items-center justify-center '
        pageClassName='block mx-[16px] flex items-center justify-center'
        activeLinkClassName='text-blanc bg-vertFoncer border rounded-[5px]'
        />
    </div>
  )
}
